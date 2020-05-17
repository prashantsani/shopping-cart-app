// THIS COMPONENT WILL EVENTUALLY BE MERGED WITH ShoppingItem

import React, { Component } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import './CartItem.scss';


export class CartItem extends Component {
  render() {
    return (
      <li className='shopping-item flex cart-item'>
        <img src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" className='shopping-item__img block'/>

        <div className="ml-4">
          <h4 className='shopping-item__title font-weight-bold text-2xl mb-1'>Item</h4>
          <div className="flex flex-row">
            <p className='mb-2'>
              <span className="inline-block shopping-item-mrp font-bold">₹319</span>
              <span className="inline-block flex justify-between flex-wrap">
                <span className="inline-block font-bold selling-price line-through gray-100 text-sm">900</span>
                <span className="inline-block text-green font-bold shopping-item-discount">64% off</span>
              </span>
            </p>
          </div>
        </div>
      </li>
    );
  }
}



export default CartItem;
