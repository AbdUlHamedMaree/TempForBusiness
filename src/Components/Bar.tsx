import React, { Component } from 'react'
import IconLink from './IconLink'

interface BarProps {

}

interface BarState {

}

export default class Bar extends Component<BarProps, BarState> {
    render() {
        return (
            <div className='Bar'>
                {this.props.children}
            </div>
        )
    }
}
