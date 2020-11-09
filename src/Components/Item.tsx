import React, { Component } from 'react';

interface ItemState {

}
interface ItemProps {
  Title: string;
  SecTitle: string;
  Discription: string;
  ImagePath: string;
}

export default class Item extends Component<ItemProps, ItemState>{

  render() {
    return (
      <div className='Item'>
        <img src={this.props.ImagePath} />
        <div className='Title'>
          {this.props.Title}
        </div>
        <div className='SecTitle'>
          {this.props.SecTitle}
        </div>
        <div className='Description'>
          {this.props.Discription}
        </div>
      </div>
    )
  }
}
