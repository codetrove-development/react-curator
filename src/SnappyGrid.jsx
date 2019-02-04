import React from 'react'
import SnappyGridItem from './SnappyGridItem.jsx'
import SnappyCore, { defaultItemOptions, defaultGridOptions } from 'snappy-grid-core'

// todo for perf test: change items to an array

const defaultProps = {
    gridOptions: defaultGridOptions
}

const noop = () => {}

export default class SnappyGrid extends React.Component {
    constructor(props = defaultProps) {
        super( props )

        this.gridRef = React.createRef()
        this.itemHolderRef = React.createRef()
        this.state = this.getInitialState()
        this.gridOptions = {
            ...defaultGridOptions,
            ...this.props.gridOptions,
        }
        this.grid = SnappyCore.getEmptyGrid( this.gridOptions.gridRows )
        this.itemsRequiringResync = []

        this.bindEventHandlers()
        this.onGridPropsChange = props.onGridPropsChange ? props.onGridPropsChange : this.defaultGridOptionsChangeHandler
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
        const { className } = this.props

        // todo these will slow it down, need to move elsewhere
        this.removeMissingChildren()
        this.syncGridProps()

        return (
            <div ref={ this.gridRef } className={ className }>
                <div ref={ this.itemHolderRef } className="grid-item-holder" style={ this.getGridStyles() }>
                    { 
                        this.state.readyToRenderChildren &&
                            React.Children.map(this.props.children, ( child, index ) => this.renderGridItem( index, child ) )
                    }
                </div>
            </div>
        )
    }

    renderGridItem( index, child ) {
        return (
            <SnappyGridItem key={ child.id } { ...this.getGridItemProps( child ) }>
                { child }
            </SnappyGridItem>
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

    defaultGridOptionsChangeHandler( gridOptions ) {
        this.gridOptions = gridOptions
    }

    removeMissingChildren() {
        const { gridOptions } = this.props

        const childProps = this.props.children
            .map( c => c.props )

        let newItems = []

        this.gridItems.forEach(item => {
            const props = childProps.find(c => c.id == item.id)

            if ( !props ) {
                const removeResult = SnappyCore.removeGridItem( this.gridItems, this.grid, item, gridOptions, this.gridSizing )
                
                this.updateGridItems( removeResult.updatedItems )

                if ( removeResult.updatedItems.length > 1 ) {
                    // todo maybe move this outside the loop
                    this.onItemsChange( removeResult.updatedItems )
                }            
                
                return
            }

            newItems.push( item )
        })

        // todo refactor this
        this.gridItems = newItems

        // this is for x, y, width, height being changed within the PROPS i.e. parent
        const movementChange = {}

        this.gridItems.forEach(item => {
            const props = childProps.find(c => c.id == item.id)

            // a non-movement prop could have changed e.g. glued
            // so update the grid items
            const itemProps = {
                ...item,
                ...props,
            }

            if ( this.itemPositionChanged( item, itemProps ) ) {
                const options = { 
                    gridOptions: this.gridOptions,
                    ...this.state,
                    grid: this.grid,
                    items: this.gridItems,
                    gridSizing: this.gridSizing,
                }

                const movementResult = SnappyCore.onItemPositionChanged( itemProps, item, options )

                movementResult.updatedItems.forEach(i => movementChange[ i.id ] = i )
            }
        })

        this.gridItems = this.gridItems.map(i => {
            const update = movementChange[ i.id ]

            if ( update ) {
                return update
            }

            return i
        })

        return true
    }

    componentDidMount() {
        if ( !this.props.width || !this.props.height ) {
            this.gridSizing = this.calculateGridSizing()
        }

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
        
        const classes = SnappyCore.getItemClasses( child.props )
        const position = SnappyCore.getItemPosition( gridSizing.widthPx, gridSizing.heightPx, gridRows, gridColumns, width, height, x, y, renderMode )
        const meta = {
            isDragging: false,
            pseudo: false,
            isConfigured: false
        }

        const itemProps = {
            id: child.key, 
            ...defaultItemOptions, 
            ...child.props,
            classes,
            position,
            meta
        }

        const defaultStyles = SnappyCore.getItemStyles( child.props )
        const positionStyles = SnappyCore.getItemPositionStyles( this.gridOptions, itemProps.styles, position )
        const styles = {
            ...defaultStyles,
            ...positionStyles
        }
        
        const algoData = algo.getItemInitialData ? algo.getItemInitialData( itemProps ) : () => {}

        const options = { 
            ...this.state,
            grid: this.grid,
            gridOptions: this.gridOptions,
            items: this.gridItems,
            gridSizing: this.gridSizing, 
        }

        const allItemProps = {
            ...this.getDefaultItemProps(),
            ...itemProps,
            algoData,
            styles,
            meta
        }

        const addResult = SnappyCore.addItemToGrid( allItemProps, options )

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

    syncChildProps() {
        if ( this.itemsRequiringResync.length > 0 ) {
            const items = this.itemsRequiringResync
            this.itemsRequiringResync = []
            this.onItemsChange( items )
        }
    }

    syncGridProps() {
        this.gridOptions = {
            ...this.gridOptions,
            ...this.props.gridOptions
        }

        // optional override by props - allows resize handling
        if ( this.props.width && this.props.height ) {

            if ( this.gridSizing && ( this.gridSizing.widthPx !== this.props.width || this.gridSizing.heightPx !== this.props.height )) {
                this.updateItemPositions()
            }

            this.gridSizing = {
                widthPx: this.props.width,
                heightPx: this.props.height
            }
        }

        console.log( this.gridSizing )
    }

    getInitialState( ) {
        return {
            readyToRenderChildren: false,
            gridRendered: false,
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

        if ( !itemProps ) {
            itemProps = this.generateGridItemProps( child )
            this.gridItems.push( itemProps )
        }

        if ( !this.props.onItemsChange ) {
            return itemProps
        }

        const mergedProps = {
            ...itemProps,
            ...child.props,
        }

        return mergedProps
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

    calculateGridSizing() {
        const itemHolder = this.itemHolderRef.current

        if ( !itemHolder )
            return null
        
        const widthPx = itemHolder.clientWidth
        const heightPx = itemHolder.clientHeight

        return {
            widthPx,
            heightPx
        }
    }

    getGridStyles( ) {
        const gridSizing = this.gridSizing

        if ( !gridSizing )
            return null

        return {
            width: `${ gridSizing.widthPx }px`,
            height: `${ gridSizing.heightPx }px`,
            // todo add to snapper core
            boxSizing: 'border-box'
        }
    }

    onItemDragStart( itemProps ) {
        const { item, success } = SnappyCore.onItemDragStart( itemProps )

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
        
        const dragResult = SnappyCore.onItemDrag( itemProps, options, movementDetails )

        if ( dragResult.success ) {
            this.grid = dragResult.grid

            if ( this.movementHasResizedGrid( dragResult.gridSizing, this.gridOptions ) ) {
                this.updateGridSizing( dragResult.gridSizing, this.gridOptions )
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

    updateGridSizing( newGridSizing, currentGridOptions ) {
        const { resizeGridDirections, itemsCanResizeGrid } = currentGridOptions

        const gridSizing = {
            widthPx: newGridSizing.widthPx,
            heightPx: newGridSizing.heightPx,
        }

        if ( this.gridSizing.widthPx === gridSizing.widthPx 
            && this.gridSizing.heightPx === gridSizing.heightPx )
            return

        const canResizeX = itemsCanResizeGrid && resizeGridDirections !== 'y'
        const canResizeY = itemsCanResizeGrid && resizeGridDirections !== 'x'

        const gridRows = canResizeY ? newGridSizing.gridRows : currentGridOptions.gridRows
        const gridColumns = canResizeX ? newGridSizing.gridColumns : currentGridOptions.gridColumns

        const gridOptions = {
            ...currentGridOptions,
            gridRows,
            gridColumns,
        }

        this.gridSizing = gridSizing
        this.gridOptions = gridOptions

        this.updateItemPositions()

        this.props.onGridPropsChange( {
            gridOptions,
            width: gridSizing.widthPx,
            height: gridSizing.heightPx
        } )
    }

    // recalculates the positions for each grid item and updates the associated styles
    updateItemPositions() {
        const { widthPx, heightPx } = this.gridSizing
        const { gridRows, gridColumns, renderMode } = this.gridOptions

        this.gridItems = this.gridItems.map(item => {
            const { width, height, x, y } = item
            
            const position = SnappyCore.getItemPosition( widthPx, heightPx, gridRows, gridColumns, width, height, x, y, renderMode )
            const positionStyles = SnappyCore.getItemPositionStyles( this.gridOptions, item.styles, position )

            const styles = {
                ...item.styles,
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
        if ( !this.props.onItemsChange )
            return

        const filtered = updatedItems
            .map(i => {
                const { id, x, y, width, height } = i

                return {
                    id,
                    x,
                    y,
                    width,
                    height
                }
            })

        if ( filtered.length ) {
            this.props.onItemsChange( filtered )
        }        
    }

    onItemDragStop( itemProps ) {
        const gridSizing = this.gridSizing
        const { widthPx, heightPx } = this.calculateGridSizing()
        const items = this.gridItems
        const updatedItem = SnappyCore.onItemDragStop( itemProps, items, widthPx, heightPx, this.gridOptions, gridSizing )

        this.updateGridItems( [ updatedItem ] )
        this.onItemsChange( [ updatedItem ] )
    }

    onItemResizeStart( itemProps ) {
        const { item, success } = SnappyCore.onItemResizeStart( itemProps )

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

        const resizeResult = SnappyCore.onItemResize( itemProps, options, movementDetails )

        if ( resizeResult.success ) {
            this.grid = resizeResult.grid

            if ( this.movementHasResizedGrid( resizeResult.gridSizing, this.gridOptions ) ) {
                this.updateGridSizing( resizeResult.gridSizing, this.gridOptions )
            }
            
            this.updateGridItems( resizeResult.updatedItems )
            this.onItemsChange( resizeResult.updatedItems )
        }

        // todo fix this
        return resizeResult.updatedItems.find( i => i.id == itemProps.id ).position
    }

    onItemResizeStop( itemProps ) {
        const gridSizing = this.gridSizing
        const { widthPx, heightPx } = this.calculateGridSizing()
        const items = this.gridItems

        const updatedItem = SnappyCore.onItemResizeStop( itemProps, items, widthPx, heightPx, this.gridOptions, gridSizing)

        this.updateGridItems( [ updatedItem ] )
        this.onItemsChange( [ updatedItem ] )
    }
}