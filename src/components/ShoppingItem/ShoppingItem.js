import React, { Component } from 'react';
import './ShoppingItem.scss';


export class ShoppingItem extends Component {
  render() {
    return (
      <>
        <div className='shopping-item'>
          <img src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" className='shopping-item__img block'/>
          <h4 className='shopping-item-title font-weight-bold text-2xl mb-1'>Item</h4>
          <p className='mb-2'>
            <span className="inline-block shopping-item-mrp font-bold">₹319</span>
            <span className="block flex justify-between flex-wrap">
              <span className="inline-block font-bold selling-price line-through gray-100 text-sm">900</span>
              <span className="inline-block text-green font-bold shopping-item-discount">64% off</span>
            </span>
          </p>
          <button className='btn bg-orange border border-orange hover:text-orange hover:bg-transparent rounded-full m-auto font-bold py-2 block shopping-item__cta'>Add to Cart</button>
        </div>
      </>
    );
  }
}



export default ShoppingItem;
