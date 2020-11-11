import React, { Component } from 'react'

interface IconLinkProps {
    Text?: string;
}

interface IconLinkState {

}

export default class IconLink extends Component<IconLinkProps, IconLinkState> {
    render() {
        return (
            <div className='IconLink'>
                <div className='IconLinkContent'>
                    <div className='ILText'>{this.props.Text}</div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
