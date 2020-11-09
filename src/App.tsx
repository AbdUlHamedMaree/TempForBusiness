import React, { Component } from 'react';
import Slide from './Components/Slide';
import './Styles/App.css';



export default class App extends Component<{}, {}>{
  render() {
    return (
      <div className='App'>
        <Slide Price={50} SoldCount={50} TotalCount={100} />
      </div>
    )
  }
}