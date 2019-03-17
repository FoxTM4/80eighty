import React, { Component } from 'react';
import {Slide} from 'react-slideshow-image';


class Home extends Component {
  render() {
   
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    }

    const Slideshow = () => {
      return (
        <Slide {...properties}>
         
          <div className="each-slide2">
           
          </div>
          <div className="each-slide1">
           
          </div>
        </Slide>
      )
  }
    return (
      <div className='home-container'>
      <Slideshow/>
      <div className='entries-container'>
      <button className='entries-button'>Get Your Entries </button>
      </div>
      </div>
    );
  }
}

export default Home;