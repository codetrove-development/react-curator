import React from 'react'
import Curator from '../../src/Curator'
import Algo from 'sticky-algo-curator'

export default class TestCuratorWrapperComponent extends React.Component {
    render() {
        const { gridOptions, ...otherProps } = this.props
        return (
            <Curator gridOptions={{ algo: new Algo(), ...gridOptions }} { ...otherProps } /> 
        )
    }
}