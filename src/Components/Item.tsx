import React, { FC } from 'react';


interface ItemProps {
  Title: string;
  SecTitle: string;
  Discription: string;
  ImagePath: string;
}

interface ItemState {
  
}

const Item:FC<ItemProps> = (props) => {
  return (
    <div className='Item'>
      <img src={props.ImagePath} />
        <div className='Title'>
          {props.Title}
        </div>
        <div className='SecTitle'>
          {props.SecTitle}
        </div>
        <div className='Description'>
          {props.Discription}
        </div>
    </div>
  )
}
export default Item