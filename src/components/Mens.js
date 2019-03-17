import React, { Component } from 'react';

class Mens extends Component {
  render() {
    return (
      <div className='mens-container'>
      <div className="grid-container">
      <div className='eachItem'>
      
      <img id='img' src={require('../assets/greyshirts.jpeg')} alt="Grey Shirt"></img>
      <div className="info">
      <h3>80Eighty Patch Long Body Grey 3 Pack</h3>
        <h1>$15.00</h1>
      <button>Add To Cart</button>
      </div>
      </div>
      <div className='eachItem'>
      <img src={require('../assets/blackshirts.jpeg')} alt='black shirts'/>
      <div className='info'>
        <h3>80Eighty Patch Long Body Black 3 Pack</h3>
        <h1>$15.00</h1>
      <button>Add To Cart</button>
      </div>
      
      </div>
      <div className='eachItem'>
      <img src={require('../assets/gtrgrey.jpeg')}
      alt='gtr shirt grey'/>
      <div className="info">
      <h3>80Eighty DCG#23 GTR Shirt</h3>
        <h1>$30.00</h1>
      <button>Add To Cart</button>
      </div>
      </div>
      <div className='eachItem'>
      <img src={require('../assets/gtr-longbody.jpeg')}
      alt='gtr shirt grey'/>
      <div className="info">
      <h3>80Eighty GTR Long Body Shirt</h3>
        <h1>$30.00</h1>
      <button>Add To Cart</button>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Mens;