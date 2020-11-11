import React, { Component } from 'react';
import $ from 'jquery';

interface CardState {

}

interface CardProps {
    Title: string;
    Percentage: number;
    ImagePath: string;
}

export default class Card extends Component<CardProps, CardState> {
    constructor(props : CardProps){
        super(props)
        $(window).on('load',()=>{
            $('.Card .ProgressBarContiner .ProgressBar .TheRealBar').css('width',props.Percentage+'%')
            if(props.Percentage<70)
            $('.Card .ProgressBarContiner .ProgressBar').css('color','black')

            if(props.Percentage<25)
            $('.Card .ProgressBarContiner .TheRealBar').css('background-color','red')

            else if(props.Percentage<50)
            $('.Card .ProgressBarContiner .TheRealBar').css('background-color','rgb(214, 160, 58)')
        })
    }
    render() {
        let res: string = '';
        if (this.props.Percentage === 100) res = 'تم الإنجاز';
        else res = '% ' +'تم إنجاز: ' + this.props.Percentage ;
        return (
            <div className='Card'>
                <img src={this.props.ImagePath} />
                <div className='CardPart2Continer'>
                    <div className='CardPart2'>
                        {this.props.Title}
                        <div className='ProgressBarContiner'>
                            <div className='ProgressBar'>
                                <div className='TheRealBar'></div>
                                {res}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
