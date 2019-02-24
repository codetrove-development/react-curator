/* 
    React-Curator: A wrapper around the curator-core library
    Copyright (C) 2019 Code Trove Limited

    This program is licensed under GNP GPLv3 and several paid-for licenses. 
    For more information visit https://www.codetrove.co.uk/Products/Curator/License
*/

import React from 'react'
import GridItem from './GridItem.jsx'
import CuratorCore, { defaultItemOptions, defaultGridOptions } from 'curator-core'

// todo for perf test: change items to an array

const defaultProps = {
    gridOptions: defaultGridOptions
}

const noop = () => {}
const isString = ( val ) => ( typeof val === 'string' )
const isNumber = ( val ) => ( typeof val === 'number' )

export default class Curator extends React.Component {
    constructor(props = defaultProps) {
        super( props )

        this.gridRef = React.createRef()
        this.itemHolderRef = React.createRef()
        this.state = this.getInitialState()
        this.gridOptions = {
            ...defaultGridOptions,
            ...this.props.gridOptions,
        }
        this.grid = CuratorCore.getEmptyGrid( this.gridOptions.gridRows )
        this.itemsRequiringResync = []

        this.bindEventHandlers()
        this.onGridPropsChange = props.onGridPropsChange ? props.onGridPropsChange : this.defaultGridPropsChangeHandler
        this.gridItems = []
        this.setupItemProps = false
    }

    getDefaultItemProps() {
        return {
            ...defaultItemOptions,
            onItemRendered: this.props.onItemRendered || noop,
            onItemDragStart: this.onItemDragStart,
            onItemDragged: this.onItemDragged,
            onItemDragStop: this.onItemDragStop,
            onItemResize: this.onItemResize,
            onItemResizeStart: this.onItemResizeStart,
            onItemResizeStop: this.onItemResizeStop,
            gridOptions: this.gridOptions,
        }
    }

    render() {
        // todo these will slow it down, need to move elsewhere
        this.syncItemProps()
        this.syncGridProps()

        if ( this.props.onItemsChange) {
            return this.renderExternallyControlledChildren()
        }

        return this.renderInternallyControlledChildren()
    }

    renderInternallyControlledChildren() {
        return (
            <div ref={ this.gridRef } className={ this.gridOptions.className }>
                <div ref={ this.itemHolderRef } className="grid-item-holder" style={ this.getGridStyles() }>
                    {
                        this.state.readyToRenderChildren &&
                            React.Children.map(this.props.children, ( child, index ) => this.renderGridItem( child ) )
                    }
                </div>
            </div>
        )
    }

    renderExternallyControlledChildren() {
        const { className } = this.props

        return (
            <div ref={ this.gridRef } className={ className }>
                <div ref={ this.itemHolderRef } className="grid-item-holder" style={ this.getGridStyles() }>
                    { 
                        this.state.readyToRenderChildren &&
                            React.Children.map(this.props.children, ( child, index ) => this.renderGridItem( child ) )
                    }
                </div>
            </div>
        )
    }

    renderGridItem(  child ) {
        if ( !child.props.id )
            throw 'Curator received a child without a unique id. You must provide an id.'

        return (
            <GridItem key={ child.props.id } { ...this.getGridItemProps( child ) }>
                { child }
            </GridItem>
        )
    }

    updateGridItems( itemsToUpdate ) {
        this.gridItems = this.gridItems.map(i => {
            const update = itemsToUpdate.find(ui => ui.id == i.id)

            if ( update ) {
                return Object.assign({}, i, update)
            }

            return i
        })
    }

    defaultGridPropsChangeHandler( props ) {
        if ( props.gridOptions )
            this.gridOptions = props.gridOptions

        this.setState({
            ...props
        })
    }

    syncItemProps() {
        const childProps = this.props.children
            .map( c => c.props )

        let newItems = []
        let itemsChanged = false

        this.gridItems.forEach(item => {
            const props = childProps.find(c => c.id == item.id)

            if ( !props ) {
                const algoState = this.buildAlgoState()
                const removeResult = CuratorCore.removeGridItem( algoState, item )
                
                this.updateGridItems( removeResult.updatedItems )      
                return
            }

            newItems.push( item )
        })

        // todo refactor this
        this.gridItems = newItems

        this.gridItems.forEach(item => {
            const props = childProps.find(c => c.id == item.id)

            // a non-movement prop could have changed e.g. glued
            // so update the grid items
            const itemProps = this.props.onItemsChange 
                ? {
                    ...item,
                    ...props,
                }
                : item

            if ( this.itemPositionChanged( item, itemProps ) ) {
                const options = { 
                    gridOptions: this.gridOptions,
                    ...this.state,
                    grid: this.grid,
                    items: this.gridItems,
                    gridSizing: this.gridSizing,
                }

                const movementResult = CuratorCore.onItemPositionChanged( itemProps, item, options )

                if ( movementResult.success ) {
                    if ( this.movementHasResizedGrid( movementResult.gridSizing, this.gridOptions ) ) {
                        this.updateGridSizingFromAlgo( movementResult.gridSizing, this.gridOptions )
                    }

                    this.updateGridItems( movementResult.updatedItems )
                    movementResult.updatedItems.forEach(i => {
                        if ( this.itemsRequiringResync.find(i2 => i2.id == i.id ) == null )
                            this.itemsRequiringResync.push( i )
                    })
                }
            }
        })

        return true
    }

    componentDidMount() {
        const { width, height } = this.gridOptions

        this.updateGridSizing( width, height )

        // todo send update upwards
        this.setState({
            readyToRenderChildren: true,
        })
    }

    componentDidUpdate() {
        this.syncChildProps()
    }

    // todo a lot of this should go in Core?
    generateGridItemProps( child ) {
        if ( !child.key )
            throw 'No key supplied to SnapperGrid child'

        const gridSizing = this.gridSizing
        const { height, width, x, y } = child.props
        const { gridRows, gridColumns, algo, renderMode } = this.gridOptions
        
        const position = CuratorCore.getItemPosition( gridSizing.widthPx, gridSizing.heightPx, gridRows, gridColumns, width, height, x, y, renderMode )
        const meta = {
            isDragging: false,
            pseudo: false,
            isConfigured: false
        }

        const itemProps = {
            id: child.key, 
            ...defaultItemOptions, 
            ...child.props,
            position,
            meta
        }

        const defaultStyles = CuratorCore.getItemStyles( itemProps )
        const positionStyles = CuratorCore.getItemPositionStyles( this.gridOptions, itemProps.styles, position )
        const styles = {
            ...defaultStyles,
            ...positionStyles
        }
        
        const algoData = algo.getItemInitialData ? algo.getItemInitialData( itemProps ) : () => {}

        const allItemProps = {
            ...this.getDefaultItemProps(),
            ...itemProps,
            algoData,
            styles,
            meta
        }

        const options = {
            ...this.buildAlgoState(),
        } 

        options.items = [
            ...options.items,
            allItemProps
        ]

        const addResult = CuratorCore.addItemToGrid( allItemProps, options )

        if ( this.movementHasResizedGrid( addResult.gridSizing, this.gridOptions ) ) {
            this.updateGridSizing( addResult.gridSizing, this.gridOptions )
        }

        this.updateGridItems( addResult.updatedItems )

        if ( addResult.itemsMoved ) {
            addResult.updatedItems.forEach(item => {
                if ( this.itemsRequiringResync.find(i => i.id === item.id ) )
                    return
    
                this.itemsRequiringResync.push( item )
            })
        }

        // todo on fail???

        // todo add item to grid on algo
        // if it's ok, then return with meta configured true
        // otherwise return configured is false,
        // dont render it until prop configured is true
        // return an update request (single item) 
        // this will work well for additions, 

        // then add this stuff to onmount to speed up the initial render => lightning!

        return {
            ...addResult.targetItem,
            meta: {
                ...meta,
                configured: addResult.success
            }
        }
    }

    buildAlgoState() {
        return {
            ...this.state,
            grid: this.grid,
            gridOptions: this.gridOptions,
            items: [
                ...this.gridItems,
            ],
            gridSizing: this.gridSizing,
        }
    }

    syncChildProps() {
        if ( this.itemsRequiringResync.length > 0 ) {
            const items = this.itemsRequiringResync
            this.itemsRequiringResync = []
            this.onItemsChange( items )
        }
    }

    syncGridProps() {
        const newGridOptions = {
            ...this.gridOptions,
            ...this.props.gridOptions
        }

        if ( newGridOptions.gridColumns !== this.gridOptions.gridColumns 
            || newGridOptions.gridRows !== this.gridOptions.gridRows
            || newGridOptions.renderMode !== this.gridOptions.renderMode ) {
                this.gridItems = CuratorCore.getUpdatedGridSizeItems( this.gridItems, newGridOptions, this.gridSizing )
        }

        this.gridOptions = newGridOptions

        const { width, height } = this.props.gridOptions

        // optional override by props - allows resize handling
        if ( width || height ) {
            const sizingChanged = this.gridSizing 
                && ( this.gridSizing.widthPx !== this.props.width 
                    || this.gridSizing.heightPx !== this.props.height 
                )

            if ( sizingChanged ) {
                
                this.updateGridSizing( width, height )
                this.updateItemPositions()
            }
        }
    }

    updateGridSizing( optionalWidth, optionalHeight ) {
        const newSizing = this.calculateItemHolderSizing( optionalWidth, optionalHeight )

        if ( this.gridSizing && ( this.gridSizing.width !== newSizing.width || this.gridSizing.height != newSizing.height ) ) {
            this.setState({
                gridSizing: newSizing
            })
        }

        this.gridSizing = newSizing
    }

    getInitialState( ) {
        return {
            readyToRenderChildren: false,
            gridRendered: false,
            gridItems: []
        }
    }

    bindEventHandlers() {
        this.onItemDragStart = this.onItemDragStart.bind( this )
        this.onItemDragged = this.onItemDragged.bind( this )
        this.onItemDragStop = this.onItemDragStop.bind( this )
        this.onItemResizeStart = this.onItemResizeStart.bind( this )
        this.onItemResize = this.onItemResize.bind( this )
        this.onItemResizeStop = this.onItemResizeStop.bind( this )
    }
    
    getGridItemProps( child ) {
        let itemProps = this.gridItems.find( c => c.id == child.props.id )
        const { gridOptions } = this

        if ( !itemProps ) {
            itemProps = this.generateGridItemProps( child )
            this.gridItems.push( itemProps )
        }

        if ( !this.props.onItemsChange ) {
            return {
                ...itemProps,
                gridOptions
            }
        }

        return {
            ...itemProps,
            ...child.props,
            gridOptions,
        }
    }

    itemPositionChanged( oldItemProps, newItemProps ) {
        return oldItemProps.x !== newItemProps.x
            || oldItemProps.y !== newItemProps.y
            || oldItemProps.width !== newItemProps.width
            || oldItemProps.height !== newItemProps.height
    }

    onGridRendered() {
        const onRendered = this.props.onGridRendered

        // grid rendered is called every time the grid items are updated
        // avoid sending this callback when it's not true 
        if ( this.state.gridRendered )
            return

        const callback = () => {
            if ( onRendered ) 
                onRendered()
        }

        this.setState({ gridRendered: true }, callback)
    }

    calculateItemHolderSizing( optionalWidth, optionalHeight ) {
        const itemHolder = this.itemHolderRef.current
        const gridWrapper = this.gridRef.current

        const width = isString( optionalWidth ) 
            ? optionalWidth 
            : isNumber( optionalWidth ) 
                ? `${ optionalWidth }px`
                : `${ itemHolder.clientWidth }px`

        const height = isString( optionalHeight ) 
            ? optionalHeight 
            : isNumber( optionalHeight )
                ? `${ optionalHeight }px`
                : `${ itemHolder.clientHeight }px`

        let heightPct = 0
        let widthPct = 0
        let heightPx = 0
        let widthPx = 0

        if ( height.indexOf('%') > -1 ) {
            heightPct = parseInt( height )
            heightPx = gridWrapper.clientHeight / 100 * heightPct
        } 
        else {
            heightPx = height ? parseInt( height ) : itemHolder.clientHeight
            heightPct = heightPx / gridWrapper.clientHeight * 100
        }

        if ( width.indexOf('%') > -1 ) {
            widthPct = width ? parseInt( width ) : itemHolder.clientWidth
            widthPx = gridWrapper.clientWidth / 100 * widthPct
        }
        else {
            widthPx = parseInt( width )
            widthPct = widthPx / gridWrapper.clientWidth * 100
        }

        return {
            widthPx,
            heightPx,
            widthPct,
            heightPct,
            height,
            width
        }
    }

    // calculateGridSizing( ) {
    //     const itemHolder = this.itemHolderRef.current
    //     const gridWrapper = this.gridRef.current

    //     if ( !itemHolder )
    //         return null
        
    //     const widthPx = itemHolder.clientWidth
    //     const heightPx = itemHolder.clientHeight
    //     const widthPct = gridWrapper.clientWidth / widthPx * 100
    //     const heightPct = itemHolder.clientHeight / heightPx * 100
    //     const pct = this.gridOptions.renderMode == 'flex'
    //     const height = pct ? `${ heightPct }%` : `${ heightPx }px`
    //     const width = pct ? `${ widthPct }%` : `${ widthPx }px`

    //     return {
    //         widthPx,
    //         heightPx,
    //         widthPct,
    //         heightPct,
    //         height,
    //         width
    //     }
    // }

    getGridStyles( ) {
        const gridSizing = this.gridSizing

        if ( !gridSizing )
            return null

        return {
            width: gridSizing.width,
            height: gridSizing.height,
            // todo add to snapper core
            boxSizing: 'border-box',
            position: 'relative',
        }
    }

    onItemDragStart( itemProps ) {
        const { item, success } = CuratorCore.onItemDragStart( itemProps )

        if ( success ) {
            this.updateGridItems([ item ])
            this.onItemsChange([ item ])
        }
    }

    onItemDragged( itemProps, movementDetails ) {
        const options = { 
            ...this.state,
            grid: this.grid,
            gridOptions: this.gridOptions,
            items: this.gridItems,
            gridSizing: this.gridSizing,
        }
        
        const dragResult = CuratorCore.onItemDrag( itemProps, options, movementDetails )

        if ( dragResult.success ) {
            this.grid = dragResult.grid

            if ( this.movementHasResizedGrid( dragResult.gridSizing, this.gridOptions ) ) {
                this.updateGridSizingFromAlgo( dragResult.gridSizing, this.gridOptions )
            }
            
            this.updateGridItems( dragResult.updatedItems )
            this.onItemsChange( dragResult.updatedItems )            
        }

        // todo fix this
        return dragResult.updatedItems.find( i => i.id == itemProps.id ).position
    }

    movementHasResizedGrid( movementResult, gridOptions ) {
        return ( gridOptions.gridColumns < movementResult.gridColumns ) 
            || ( gridOptions.gridRows < movementResult.gridRows )
    }

    updateGridSizingFromAlgo( newGridSizing, currentGridOptions ) {
        const { resizeGridDirections, itemsCanResizeGrid } = currentGridOptions

        const gridSizing = this.calculateItemHolderSizing( `${newGridSizing.widthPx}px`, `${newGridSizing.heightPx}px` ) 

        if ( this.gridSizing.widthPx === gridSizing.widthPx 
            && this.gridSizing.heightPx === gridSizing.heightPx )
            return

        const canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y'
        const canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x'

        const gridRows = canResizeY ? newGridSizing.gridRows : currentGridOptions.gridRows
        const gridColumns = canResizeX ? newGridSizing.gridColumns : currentGridOptions.gridColumns
        const { width, height } = gridSizing

        const gridOptions = {
            ...currentGridOptions,
            gridRows,
            gridColumns,
            width,
            height,
        }

        this.gridSizing = gridSizing
        this.gridOptions = gridOptions

        this.updateItemPositions()

        this.onGridPropsChange( {
            gridOptions,
        } )
    }

    // recalculates the positions for each grid item and updates the associated styles
    updateItemPositions() {
        const { widthPx, heightPx } = this.gridSizing
        const { gridRows, gridColumns, renderMode } = this.gridOptions

        this.gridItems = this.gridItems.map(item => {
            const { width, height, x, y, meta } = item
            const { top, left, transform, ...otherStyles } = item.styles 
            
            const position = CuratorCore.getItemPosition( widthPx, heightPx, gridRows, gridColumns, width, height, x, y, renderMode )
            const positionStyles = CuratorCore.getItemPositionStyles( this.gridOptions, item.styles, position )

            const styles = {
                ...otherStyles,
                ...positionStyles
            }

            return {
                ...item,
                position,
                styles
            }
        })
    }

    onItemsChange( updatedItems ) {
        const filtered = updatedItems
            .map(i => {
                const { id, x, y, width, height, className } = i

                return {
                    id,
                    x,
                    y,
                    width,
                    height,
                    className
                }
            })

        if ( !filtered.length ) {
            return
        }      
        
        if ( this.props.onItemsChange ) {
            this.props.onItemsChange( filtered )
        }
        else {
            const gridItems = this.state.gridItems.map(i => {
                if ( i.id !== item1Props.id )
                  return i
          
                return item1Props 
              })

            this.setState({
                gridItems
            })
        }
    }

    onItemDragStop( itemProps ) {
        const { widthPx, heightPx } = this.gridSizing
        const items = this.gridItems
        const updatedItem = CuratorCore.onItemDragStop( itemProps, items, widthPx, heightPx, this.gridOptions, this.gridSizing )

        this.updateGridItems( [ updatedItem ] )
        this.onItemsChange( [ updatedItem ] )
    }

    onItemResizeStart( itemProps ) {
        const { item, success } = CuratorCore.onItemResizeStart( itemProps )

        if ( success ) {
            this.updateGridItems([ item ])
            this.onItemsChange([ item ])
        }
    }

    onItemResize( itemProps, movementDetails ) {
        const options = { 
            ...this.state,
            grid: this.grid,
            gridOptions: this.gridOptions,
            items: this.gridItems,
            gridSizing: this.gridSizing,
        }

        const resizeResult = CuratorCore.onItemResize( itemProps, options, movementDetails )

        if ( resizeResult.success ) {
            this.grid = resizeResult.grid

            if ( this.movementHasResizedGrid( resizeResult.gridSizing, this.gridOptions ) ) {
                this.updateGridSizingFromAlgo( resizeResult.gridSizing, this.gridOptions )
            }
            
            this.updateGridItems( resizeResult.updatedItems )
            this.onItemsChange( resizeResult.updatedItems )
        }

        // todo fix this
        return resizeResult.updatedItems.find( i => i.id == itemProps.id ).position
    }

    onItemResizeStop( itemProps ) {
        const { widthPx, heightPx } = this.gridSizing
        const items = this.gridItems

        const updatedItem = CuratorCore.onItemResizeStop( itemProps, items, widthPx, heightPx, this.gridOptions, this.gridSizing)

        this.updateGridItems( [ updatedItem ] )
        this.onItemsChange( [ updatedItem ] )
    }
}