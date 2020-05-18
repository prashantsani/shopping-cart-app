import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './CartLink.scss';


export class CartLink extends Component {
  render() {
    return (
      <Link to='/cart' className='inline-block cart-link ml-4'>
        <sup className='inline-block count'>{this.props.CartLink}</sup>
        <FaShoppingCart color='rgb(255,255,255)' size='32' className='inline-block'/>
      </Link>
    );
  }
}



export default CartLink;
