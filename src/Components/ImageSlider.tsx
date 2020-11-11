import React, { Component } from 'react'

interface ImageSliderProps {
    Pathes: string[];
    IsSlider: boolean;
    Title:string;
}

interface ImageSliderState {
    Index: number;
}

export default class ImageSlider extends Component<ImageSliderProps, ImageSliderState> {

    constructor(props: ImageSliderProps) {
        super(props)
        this.state = {
            Index: 0
        }
    }

    NextImage = () => {
        if (this.state.Index < this.props.Pathes.length - 1)
            this.setState({ Index: this.state.Index + 1 })
        else this.setState({ Index: 0 })
    }

    PreviousImage = () => {
        if (this.state.Index > 0)
            this.setState({ Index: this.state.Index - 1 })
        else this.setState({ Index: this.props.Pathes.length - 1 })
    }

    render() {
        let res: any;
        let com: any;
        if (this.props.IsSlider) {

            res = <div>
                <svg onClick={this.PreviousImage} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="103.537px" height="103.537px" viewBox="0 0 103.537 103.537" >
                    <path d="M103.048,12.002c-1.445-3.771-5.679-5.649-9.438-4.207L4.692,41.9c-2.753,1.055-4.603,3.662-4.688,6.609    c-0.087,2.948,1.608,5.656,4.295,6.872l88.917,40.196c0.978,0.44,2,0.65,3.006,0.65c2.784,0,5.442-1.6,6.665-4.302    c1.661-3.678,0.029-8.007-3.648-9.671L26.273,49.277l72.568-27.834C102.61,19.998,104.496,15.771,103.048,12.002z" />
                </svg>
                <svg onClick={this.NextImage} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="103.536px" height="103.536px" viewBox="0 0 103.536 103.536">
                    <path d="M0.65,91.928c1.221,2.701,3.881,4.3,6.665,4.3c1.006,0,2.029-0.209,3.006-0.65l88.917-40.195    c2.688-1.216,4.381-3.925,4.295-6.873c-0.085-2.948-1.934-5.554-4.687-6.609L9.929,7.794C6.17,6.352,1.933,8.23,0.489,12.001    c-1.447,3.769,0.438,7.995,4.207,9.44l72.569,27.834L4.299,82.255C0.62,83.92-1.012,88.249,0.65,91.928z" />
                </svg>
            </div>;
            com = <img src={this.props.Pathes[this.state.Index]} />;
        }
        else {
            res = undefined;
            com = <iframe  src={"https://www.youtube.com/embed/"+this.props.Pathes[0]}></iframe>
        }
        return (
            <div className='ImageSlider'>
                <div className='ImageSliderContent'>
                    {res}
                    <div className='ISText'>{this.props.Title}</div>
                    {com}
                </div>
            </div>
        )
    }
}
