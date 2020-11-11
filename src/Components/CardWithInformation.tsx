import React, { Component } from 'react'

interface CardWithInformationProps {
    Title: string;
}

interface CardWithInformationState {

}

export default class CardWithInformation extends Component<CardWithInformationProps, CardWithInformationState> {
    render() {
        return (
            <div className='CardWithInformation'>
                <div className='CardWithInformationContent'>
                    <div className='CWITitle'>{this.props.Title}</div>
                    <div className='CWIChildren'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
