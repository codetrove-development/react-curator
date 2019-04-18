import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Curator from '../../src/Curator'
import { mount } from 'enzyme'
import React from 'react'
import Algo from 'sticky-algo-curator'
import sinon from 'sinon'
import { defaultItemOptions } from 'curator-core'

class TestChildComponent extends React.Component {
    render() {
        return (
            <div className='test-item'></div>
        )
    }
}

describe('<Curator />', () => {
    it('renders without crashing with no children', () => {
        const wrapper = shallow(
            <div>
                <Curator gridOptions={{ algo: new Algo() }}>
                </Curator> 
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
        const { x, y, width, height, className, glued, visible, displayResize } = defaultItemOptions

        const wrapper = mount( (
            <div>
                <Curator gridOptions={{ algo: new Algo() }}>
                    <TestChildComponent id={ 1 } />
                </Curator> 
            </div>
        ) ).find('Curator')

        const { x, y, width, height, className, glued, visible, displayResize } = wrapper.instance().gridItems[ 0 ]

        expect( options ).toEqual( { x, y, width, height, className, glued, visible, displayResize } )
    })
})