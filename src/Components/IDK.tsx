import React, { Component } from 'react';

interface IDKProps {
    URL: string;
    Title: string;
}

interface IDKState {

}

export default class IDK extends Component<IDKProps, IDKState> {
    URLClick = () => {
        alert('clicked to URL:' + this.props.URL)
    }
    render() {
        return (
            <div className='IDK' onClick={this.URLClick}>
                <div className='IDKElCon'>
                    <div className='IDKIcon'>
                        {this.props.children}
                    </div>
                    <div className='Title'>
                        {this.props.Title}
                    </div>
                </div>
            </div>
        )
    }
}
