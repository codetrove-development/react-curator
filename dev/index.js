import React from 'react'
import ReactDOM from 'react-dom'
import Algo from 'sticky-algo-curator'
import Curator from '../src/Curator.jsx'

import './index.css'

const newGridItem = ( key, x, y, width, height ) => {
  return {
    id: key,
    key,
    x,
    y,
    width,
    height,
    className: 'grid-item'
  }
}

class RenderedChild extends React.Component {
  render() {
    const { id, meta, x, y, width, height } = this.props
    const { isDragging, isResizing } = meta
    // console.log(`[${ id }]: I rendered!`) 
                    
    return ( 
      <div>
        <div><span>{ x }, { y }</span></div>
        <div>Item { id }</div>
        <div><span>{ width }, { height }</span></div>
        { isDragging && <div>Dragging</div> }
        { isResizing && <div>Resizing</div> }
      </div>
    )
  }
}

class App extends React.Component {
  constructor( props ) {
    super( props )

    const item1Props = newGridItem(1, 1, 2, 3, 1)
    const item2Props = newGridItem(2, 4, 2, 1, 1)

    this.state = {
      gridOptions: {
        algo: new Algo()
      },
      width: 1200,
      height: 600,
      items: [
        item1Props,
        item2Props
      ],
      itemsToAttach: []
    }

    this.pageRef = React.createRef()
    this.setSizing = this.setSizing.bind( this )
  }

  renderGrid() {
    const { items } = this.state

    const Grid = (
      <Curator className="curator-grid" 
        onItemsChange={ ( items ) => this.onItemsChange( items ) } 
        onGridPropsChange={ (options ) => this.onGridPropsChange( options ) }
        gridOptions={ this.state.gridOptions }
        width={ this.state.width }
        height={ this.state.height }
      >
        {
          items.map(( item, index ) => ( 
            <RenderedChild key={ item.id } { ...item } /> 
          ) )
        }
      </Curator>
    )

    return Grid
  }

  renderControls() {
    return (
      <ul id="page-options">
        <li className="page-button" onClick={ ( e ) => this.onAddItemClick( e )}>Add Item</li>
        <li className="page-button" onClick={ ( e ) => this.onGlueItemClick( e )}>Glue Item</li>
        <li className="page-button" onClick={ ( e ) => this.onUnGlueItemClick( e )}>Un-glue Item</li>
        <li className="page-button" onClick={ ( e ) => this.onResizeItemClick( e )}>Resize Item</li>
        <li className="page-button" onClick={ ( e ) => this.onRemoveItemClick( e )}>Remove Item</li>
      </ul>
    )
  }

  render() {
    return (
      <div id="page" ref={ this.pageRef }>
        { this.renderControls() }
        { this.renderGrid() }
      </div>
    )
  }

  // for now snapper only works 
  // with a percentage width. Get in touch if this is something you need asap
  componentDidMount() {
    if ( window ) {
      window.addEventListener( 'resize', this.setSizing )
    }

    this.setSizing()
  }

  componentWillUnmount() {
    if ( window ) {
      window.removeEventListener( 'resize', this.setSizing )
    }
  }

  setSizing() {
    const page = this.pageRef.current

    if ( page instanceof HTMLElement ) {
      this.setState({
        width: page.offsetWidth * 0.8 // not height!
      })
    }
  }

  onGridPropsChange( options ) {
    this.setState({
      ...options
    })
  }

  onItemsChange( itemsToUpdate ) {
    const items = this.state.items.map(i => {
      const update = itemsToUpdate.find(ui => ui.id == i.id)

      if ( update ) {
          return {
            ...i,
            ...update
          }
      }

      return i
  })

    this.setState({
      items
    })
  }

  // to add another grid item, simply update your state
  // like you would any other collection
  onAddItemClick( e ) {
    const { items } = this.state
    const count = items.length
    const key = count + 1

    items.push( newGridItem( key, 1, 1, 1, 1 ))

    this.setState({
      items
    })
  }

  toggleItemsGlued( glued ) {
    const { items } = this.state

    const firstUngluedItem = items
      .find(i => i.glued !== glued )

    if ( !firstUngluedItem )
      return

    const newItems = items.map(i => {
      if ( i.id !== firstUngluedItem.id )
        return i

      return {
        ...i,
        glued
      }
    })

    this.setState({
      items: newItems
    })
  }

  onGlueItemClick( e ) {
    this.toggleItemsGlued( true )
  }

  onUnGlueItemClick( e ) {
    this.toggleItemsGlued( false )
  }

  onResizeItemClick( e ) {
    const item  = this.state.items[ 0 ]

    if ( !item )
      return

    const update = {
      ...item,
      // just make the item resize upto w/h 3 then revert
      width: ( item.width > 2 ? 1 : item.width + 1 ),
      height: ( item.height > 2 ? 1 : item.height + 1 ),
    }

    const items = this.state.items.map(i => {
      if ( i.id !== item.id )
        return i

      return update
    })

    this.setState({
      items
    })
  }

  onRemoveItemClick( e ) {
    const { items } = this.state
    const newItems = [
      ...items
    ]

    newItems.pop()

    this.setState({
      items: newItems
    })
  }
}

ReactDOM.render(<App />, document.getElementById("root"))