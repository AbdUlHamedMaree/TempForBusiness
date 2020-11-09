import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';


interface CircularProgressBarState {
  percentage: number;
}
interface CircularProgressBarProps {
  SoldNumber: number;
  OutOfNumber: number;
}

class CircularProgressBar extends Component<CircularProgressBarProps, CircularProgressBarState>{
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

interface ItemState {

}
interface ItemProps {
  Title: string;
  SecTitle: string;
  Discription: string;
  ImagePath: string;
}

class Item extends Component<ItemProps, {}>{

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


interface SlideState {
  ItemCount: number;

}
interface SlideProps {
  Price: number;
  TotalCount: number;
  SoldCount: number;
}

class Slide extends Component<SlideProps, SlideState>{
  constructor(props: SlideProps) {
    super(props)
    this.state = { ItemCount: 0 };
  }

  PlusButtonHundler = () => {
    this.setState({ ItemCount: this.state.ItemCount + 1 });
  }

  MinusButtonHundler = () => {
    if (this.state.ItemCount > 0) {
      this.setState({ ItemCount: this.state.ItemCount - 1 });
    }
  }

  LoveButtonHundler = () => {
alert('added to fav')
  }

  AddToCartButtonHundler = () => {
    alert('added to cart')
  }

  render() {
    return (
      <div className='Slide'>
        <CircularProgressBar SoldNumber={this.props.SoldCount} OutOfNumber={this.props.TotalCount} />
        <div className='RightPanel'>
          <div>
            <svg id='circle'>
              <circle cx='0' cy='100' r='100'></circle>
            </svg>
          </div>
          <svg onClick={this.PlusButtonHundler} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" >
            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
          </svg>
          <div>{this.state.ItemCount}</div>
          <svg onClick={this.MinusButtonHundler} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="124px" height="124px" viewBox="0 0 124 124" >
            <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" />
          </svg>
        </div>
        <div className='ManageButtons'>
          <svg onClick={this.LoveButtonHundler} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" >
            <path onClick={this.LoveButtonHundler} d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268    c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514    c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482    s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514    C512,93.417,453.532,30,376,30z"></path>
          </svg>
          <br />
          <svg onClick={this.AddToCartButtonHundler} xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt">
            <path onClick={this.AddToCartButtonHundler} d="m416.667969 361.492188h-25.167969v-25.167969c0-8.285157-6.714844-15-15-15s-15 6.714843-15 15v25.167969h-25.167969c-8.28125 0-15 6.714843-15 15 0 8.285156 6.71875 15 15 15h25.167969v25.164062c0 8.285156 6.714844 15 15 15s15-6.714844 15-15v-25.164062h25.167969c8.28125 0 15-6.714844 15-15 0-8.285157-6.71875-15-15-15zm0 0" />
            <path onClick={this.AddToCartButtonHundler} d="m461.191406 270.804688c28.386719-2.230469 50.808594-26.027344 50.808594-54.980469 0-30.417969-24.746094-55.167969-55.167969-55.167969h-17.082031l-52.441406-126.601562c-11.640625-28.101563-43.972656-41.496094-72.078125-29.855469-13.613281 5.640625-24.21875 16.242187-29.855469 29.855469-5.640625 13.613281-5.636719 28.609374.003906 42.222656l34.949219 84.378906h-128.652344l34.949219-84.378906c11.640625-28.105469-1.753906-60.4375-29.855469-72.078125-28.105469-11.640625-60.441406 1.753906-72.078125 29.855469l-52.441406 126.601562h-17.082031c-30.417969 0-55.167969 24.75-55.167969 55.167969 0 25.816406 17.828125 47.539062 41.816406 53.523437l25.308594 189.8125c1.890625 14.195313 9.1875 27.484375 20.535156 37.421875s25.488282 15.410157 39.808594 15.410157h249.03125c74.714844 0 135.5-60.785157 135.5-135.5 0-42.695313-19.855469-80.835938-50.808594-105.6875zm-148.097656-206.007813c-2.574219-6.210937-2.574219-13.050781-.003906-19.261719 2.574218-6.210937 7.410156-11.046875 13.621094-13.617187 12.820312-5.308594 27.574218.800781 32.882812 13.617187l47.683594 115.121094h-54.476563zm-160.6875-19.261719c5.3125-12.816406 20.0625-18.925781 32.882812-13.617187 12.820313 5.308593 18.929688 20.058593 13.617188 32.882812l-39.703125 95.855469h-54.480469zm-122.40625 170.289063c0-13.878907 11.289062-25.167969 25.167969-25.167969h27.019531c.027344 0 .054688.003906.082031.003906.035157 0 .070313-.003906.105469-.003906h86.890625.113281 173.210938.1875 86.847656c.039062 0 .074219.003906.109375.003906.023437 0 .050781-.003906.078125-.003906h27.019531c13.878907 0 25.167969 11.289062 25.167969 25.167969 0 13.875-11.289062 25.167969-25.167969 25.167969h-401.664062c-13.878907 0-25.167969-11.292969-25.167969-25.167969zm97.46875 266.167969c-14.652344 0-28.671875-12.273438-30.605469-26.796876l-24.5625-184.203124h219.273438c-30.820313 24.855468-50.574219 62.910156-50.574219 105.5 0 42.585937 19.753906 80.640624 50.574219 105.5zm249.03125 0c-58.171875 0-105.5-47.328126-105.5-105.5 0-58.175782 47.328125-105.5 105.5-105.5s105.5 47.324218 105.5 105.5c0 58.171874-47.328125 105.5-105.5 105.5zm0 0" /></svg>
        </div>
        <div className='Price'>
          AED {this.props.Price}
        </div>
        <div className='triangle-up-left'></div>
        <div className='LeftItem'>
          <Item ImagePath={require('./Images/Profile.jpg')} Title='Buy a' SecTitle='H2H Hoodie' Discription='blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla ' />
        </div>
        <div className='WinThisAll'>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" >
          <path d='M 150 250 Q 450 100 750 250 C 800 300 700 400 650 400 Q 450 300 250 400 C 200 400 100 300 150 250 Z'>
          </path>
        </svg>
        <div className='WinThisText'>
          Win this
          </div>
      </div>
        <div className='RightItem'>
          <Item ImagePath={require('./Images/Profile.jpg')} Title='Get a chance to win:' SecTitle='Blaviii Blaviii Blaviii Blaviii ' Discription='blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla ' />
        </div>
      </div >
    )
  }
}

export default class App extends Component<{}, {}>{
  render() {
    return (
      <div className='App'>
        <Slide Price={50} SoldCount={50} TotalCount={100} />
      </div>
    )
  }
}