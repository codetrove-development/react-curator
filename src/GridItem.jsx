/* 
    React-Curator: A wrapper around the curator-core library
    Copyright (C) 2019 Code Trove Limited

    This program is licensed under GNP GPLv3 and several paid-for licenses. 
    For more information visit https://www.codetrove.co.uk/Products/Curator/License
*/
import React from 'react'
import { DraggableCore } from 'react-draggable'
import SnappyCore from 'curator-core'

export default class GridItem extends React.Component {
    constructor( props ) {
        super( props )

        // for getting element position & sizing
        this.itemRef = React.createRef()
        this.state = {
            styles: this.props.styles,
        }
    }

    render() {
        // todo sanitize the child props before passing across
        const isMoving = this.props.meta.isDragging || this.props.meta.isResizing 

        const styles = isMoving
            ? this.state.styles
            : this.props.styles 

        const { placeholderStyles } = this.props.meta

        const resizeClassName = this.props.gridOptions.resizeClassName
            ? this.props.gridOptions.resizeClassName
            : 'resize-handle'

        const className = this.props.glued 
            ? `${ this.props.className } glued`
            : this.props.className

        return (
            <React.Fragment>
                <DraggableCore 
                    cancel={ `.${resizeClassName}` }
                    onStart={ (e, data) => this.onDragStart(e, data ) }
                    onStop={ (e, data) => this.onDragEnd( e, data ) }
                    onDrag={ (e, data) => this.onDrag( e, data ) }
                >
                    <div ref={ this.itemRef } className={ className } 
                        style={ styles } >
                            { this.props.children }
                            { 
                                this.props.displayResize && !this.props.glued && 
                                <DraggableCore
                                    disabled={ this.props.glued }
                                    onStart={ (e, data) => this.onResizeStart( e, data, 'start' ) }
                                    onStop={ (e, data) => this.onResizeEnd( e, data, 'end' ) }
                                    onDrag={ (e, data) => this.onResize(e, data, 'drag') }
                                >
                                    <div className={ resizeClassName }></div>
                                </DraggableCore>
                            }
                    </div>
                </DraggableCore>
                { isMoving && <div style={ placeholderStyles } className="placeholder"></div> }
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.onItemRendered( this.props )
    }

    onDragStart( e, data ) {
        this.movement = {
            xStart: data.x,
            yStart: data.y,
            left: this.props.position.leftPx,
            top: this.props.position.topPx,
        }

        this.props.onItemDragStart( this.props )
    }

    onDragEnd( e, data ) {
        this.props.onItemDragStop( this.props )
    }

    onDrag(e, data ) {
        //var startTime = new Date()
        const position = this.props.onItemDragged( this.props, {
            initialMouseX: this.movement.xStart,
            initialMouseY: this.movement.yStart,
            currentMouseX: data.x,
            currentMouseY: data.y,
            initialTop: this.movement.top,
            initialLeft: this.movement.left
        })

        const styles = SnappyCore.getItemPositionStyles( this.props.gridOptions, this.props.styles, position )
        
        this.setState({
            styles
        })
    }

    onResizeStart( e, data ) {
        this.movement = {
            xStart: data.x,
            yStart: data.y,
            width: this.props.position.widthPx,
            height: this.props.position.heightPx
        }

        this.props.onItemResizeStart( this.props )
    }

    onResizeEnd( e, data ) {
        this.props.onItemResizeStop( this.props )
    }

    onResize( e, data ) {
        const props = {
            ...this.props
        }

        const position = this.props.onItemResize( props, {
            initialMouseX: this.movement.xStart,
            initialMouseY: this.movement.yStart,
            currentMouseX: data.x,
            currentMouseY: data.y,
            initialWidth: this.movement.width,
            initialHeight: this.movement.height
        })

        const styles = SnappyCore.getItemPositionStyles( this.props.gridOptions, this.props.styles, position )
        
        this.setState({
            styles
        })
    }
}