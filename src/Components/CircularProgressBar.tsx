import React, { Component } from 'react';
import $ from 'jquery';

interface CircularProgressBarState {
    percentage: number;
  }
  interface CircularProgressBarProps {
    SoldNumber: number;
    OutOfNumber: number;
  }
  
  export default class CircularProgressBar extends Component<CircularProgressBarProps, CircularProgressBarState>{
    constructor(props: CircularProgressBarProps) {
      super(props)
    }
    renderCircle = () => {
      let res: number, per: number;
      per = (this.props.SoldNumber * 100) / this.props.OutOfNumber;
      res = 630 - (630 * per) / 100;
      $(window).on('load', () => {
        $('.Circle svg circle:nth-child(3)').css('stroke-dashoffset', res)
      })
    }
    render() {
      return (
        <div className='CircularProgressBar'>
          <div className='Circle'>
            <svg>
              <circle cx='100' cy='100' r='100'></circle>
              <circle cx='100' cy='100' r='100'></circle>
              <circle cx='100' cy='100' r='100'></circle>
            </svg>
          </div>
          <div className='Text'>
            <div className='SoldNumber'>{this.props.SoldNumber}</div>
            <div className='Sold'>SOLD</div>
            <div className='OutOf'>OUT OF</div>
            <div className='OutOfNumber'>{this.props.OutOfNumber}</div>
          </div>
          {this.renderCircle()}
        </div>
      )
    }
  }
  