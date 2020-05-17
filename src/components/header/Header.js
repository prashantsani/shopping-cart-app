import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.scss';


export class Header extends Component {
  render() {
    return (
      <header>
        <div className='wrap flex flex-row flex-no-wrap items-center'>
          <Link to='/shopping-cart-app/' className='inline-block'><AiFillStar color='rgb(243,195,0)' size='44' /></Link>
          
          <button className='inline-block ml-auto bg-transparent'> 
            <FaSearch color='rgb(255,255,255)' size='28' className='inline-block'/>
          </button>

          <Link to='/cart' className='inline-block cart-link ml-4'>
            <sup className='inline-block count'>2</sup>
            <FaShoppingCart color='rgb(255,255,255)' size='32' className='inline-block'/>
          </Link>
        </div>
      </header>
    );
  }
}



export default Header;
