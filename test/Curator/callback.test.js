import Curator from '../../src/Curator'
import { mount } from 'enzyme'
import React from 'react'
import Algo from 'sticky-algo-curator'
import {
    TestCuratorWrapperComponent,
    TestChildComponent
} from '../Mocks'

describe('<Curator />', () => {
    it('triggers grid item callback when item positions change', () => {
        const callback = jest.fn();

        const wrapper = mount(
            <Curator gridOptions={{ algo: new Algo(), className: 'test' }} onItemsChange={ callback }>
                <TestChildComponent id={1} />
            </Curator>
        )

        const item = wrapper.instance().gridItems[ 0 ]
        wrapper.instance().onItemsChange([ item ])

        expect( callback ).toHaveBeenCalled()
    })

    it('triggers grid options change when options change', () => {
        const callback = jest.fn();

        const wrapper = mount(
            <Curator gridOptions={{ algo: new Algo(), className: 'test' }} onGridPropsChange={ callback }>
                <TestChildComponent id={1} />
            </Curator>
        )

        wrapper.instance().updateGridSizingFromAlgo({
            widthPx: '10px',
            heightPx: '10px',
            gridRows: 10,
            gridColumns: 10,
        }, wrapper.instance().gridOptions)

        expect( callback ).toHaveBeenCalled()
    })
})