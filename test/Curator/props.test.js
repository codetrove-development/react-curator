import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Curator from '../../src/Curator'
import { mount } from 'enzyme'
import React from 'react'
import Algo from 'sticky-algo-curator'
import sinon from 'sinon'
import { defaultItemOptions } from 'curator-core'
import {
    TestCuratorWrapperComponent,
    TestChildComponent
} from '../Mocks'

describe('<Curator />', () => {
    it('renders without crashing with no children', () => {
        const wrapper = shallow(
            <div>
                <Curator gridOptions={{ algo: new Algo() }} /> 
            </div>
        )
    })

    it('renders one grid item for one child prop', () => {
        const wrapper = mount( (
            <div>
                <Curator gridOptions={{ algo: new Algo() }}>
                    <TestChildComponent id={ 1 } />
                </Curator> 
            </div>
        ) ).find('Curator')

        wrapper.setState({
            readyToRenderChildren: true
        })

        const component = wrapper.instance()
        component.forceUpdate()

        expect( wrapper.find( TestChildComponent ).length ).toEqual( 1 )
    })

    it('stores the childs props', () => {
        const wrapper = mount( (
            <div>
                <Curator gridOptions={{ algo: new Algo() }}>
                    <TestChildComponent id={ 1 } />
                </Curator> 
            </div>
        ) ).find('Curator')

        const gridItems = wrapper.instance().gridItems

        expect( gridItems.length ).toEqual( 1 )
    })

    it('set internal options to parent props', () => {
        const options = {
            x: 1,
            y: 2,
            width: 3,
            height: 4,
            className: 'test',
            glued: true,
            visible: false,
            displayResize: false,            
        }

        const wrapper = mount( (
            <div>
                <Curator gridOptions={{ algo: new Algo() }}>
                    <TestChildComponent id={ 1 } { ...options } />
                </Curator> 
            </div>
        ) ).find('Curator')

        const { x, y, width, height, className, glued, visible, displayResize } = wrapper.instance().gridItems[ 0 ]

        expect( options ).toEqual( { x, y, width, height, className, glued, visible, displayResize } )
    })

    it('sets missing item props to defaults', () => {
        const defaults = getItemPropsFromAllOptions( defaultItemOptions )

        const wrapper = mount( (
            <div>
                <Curator gridOptions={{ algo: new Algo() }}>
                    <TestChildComponent id={ 1 } />
                </Curator> 
            </div>
        ) ).find('Curator')

        const itemProps = getItemPropsFromAllOptions( wrapper.instance().gridItems[ 0 ] )

        expect( itemProps ).toEqual( defaults )
    })

    it('syncs parent prop positioning updates', () => {
        const wrapper = mount( (
            <Curator gridOptions={{ algo: new Algo() }}></Curator> 
        ) )

        wrapper.setProps({
            children: (
                <TestChildComponent id={ 1 } x={2} y={3} width={4} height={5} />
            )
        })

        wrapper.update()

        const item = wrapper.instance().gridItems[ 0 ]

        expect( item.x ).toEqual( 2 )
        expect( item.y ).toEqual( 3 )
        expect( item.width ).toEqual( 4 )
        expect( item.height ).toEqual( 5 )
    })

    it('syncs grid option props with parent updates', () => {
        const wrapper = mount( <TestCuratorWrapperComponent /> )
        const expectedOptions = {
            gridColumns: 10,
            gridRows: 10,
            width: '1000px',
            height: '1000px'
        }

        wrapper.setProps({
            gridOptions: expectedOptions
        })

        wrapper.update()

        const gridOptions = wrapper.find('Curator').instance().gridOptions

        expect( gridOptions.gridColumns ).toEqual( expectedOptions.gridColumns )
        expect( gridOptions.gridRows ).toEqual( expectedOptions.gridRows )
        expect( gridOptions.width ).toEqual( expectedOptions.width )
        expect( gridOptions.height ).toEqual( expectedOptions.height )
    })

    it('removes item props for removed children', () => {
        const wrapper = mount(
            <Curator gridOptions={{ algo: new Algo() }}>
                <TestChildComponent id={ 1 } />
            </Curator>
        )

        wrapper.setProps({
            children: []
        })

        wrapper.update()

        const gridItems = wrapper.instance().gridItems

        expect( gridItems.length ).toEqual( 0 )       
    })

    it('sets the grid class when passed as props', () => {
        const wrapper = mount(
            <Curator gridOptions={{ algo: new Algo(), className: 'test' }} />
        )

        // https://github.com/airbnb/enzyme/issues/1177
        const classIsSet = wrapper.render().hasClass('test') 

        expect( classIsSet ).toBeTruthy()
    })
})

const getItemPropsFromAllOptions = ( options ) => {
    const { x, y, width, height, className, glued, visible, displayResize } = options
    return { x, y, width, height, className, glued, visible, displayResize }
}