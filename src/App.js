import './App.css';
import React, { Component } from 'react'

import News from './Components/News';
import Navbar from './Components/Navbar';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={16} apiKey={"34ccdce864694031b17b0ddc0e760b02"} country={"in"} category={"sports"}/>
      </div>
    )
  }
}
