import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Header extends Component {
  render() {

   

    return (
      <div className='header'>
      <div className='login-container'>
        <p>MY ACCOUNT</p>
        <Link to='/register'><p>REGISTER</p></Link>
       <Link to='/login'> <p>LOG IN</p></Link>
      </div>

      <div className='title-cart-container'>
     <Link to='/'> <img id='img' src={require('../80mainlogo.png')} alt="80eighty logo"></img></Link>
      <div className='button-container'>
      <button id='leftButton'>Current Giveaway</button>
      <button>Past Winners</button>
      
      </div>
      <div className='cart-container'>
        <img id='cart-logo' src={require('../shoppingcart2.svg')} alt='shopping cart'/>
        <div className='circle'>0
        </div>
      </div>
      
      </div>

      <div className='Link-container'>
        
        <Link to='/mens'><button>MENS v</button></Link>
        <Link to='/womens'><button>WOMENS CLOTHING</button></Link>
        <Link to='/bundle'> <button>BUNDLE ITEMS</button></Link>
        <Link to='/kids'> <button>YOUTH/INFANT</button></Link>
        <Link to='/headwear'> <button>HEADWEAR</button></Link>
        <Link to='/accessories'><button>ACCESSORIES v</button></Link>
        <Link to='/auto'> <button>AUTO DETAILING</button></Link>
        <Link to='/decals'> <button>DECALS/BANNERS</button></Link>
        <Link to='/clearance'><button>CLEARANCE</button></Link>
      </div>
      
      </div>
    );
  }
}

export default Header;