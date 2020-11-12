import React, { FC } from 'react';


interface CircularProgressBarProps {
  SoldNumber: number;
  OutOfNumber: number;
}

interface CircularProgressBarState {
}

const CircularProgressBar:FC<CircularProgressBarProps> = (props) => {

  
  let res: number, per: number;
  per = (props.SoldNumber * 100) / props.OutOfNumber;
  res = 630 - (630 * per) / 100;
  $(window).on('load', () => {
    $('.Circle svg circle:nth-child(3)').css('stroke-dashoffset', res)
  })

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
            <div className='SoldNumber'>{props.SoldNumber}</div>
            <div className='Sold'>SOLD</div>
            <div className='OutOf'>OUT OF</div>
            <div className='OutOfNumber'>{props.OutOfNumber}</div>
          </div>
    </div>
  )
}
export default CircularProgressBar