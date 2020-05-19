import React, { Component } from 'react';
import './ShoppingItem.scss';


export class ShoppingItem extends Component {

  addToCart = () => {
    this.props.addToCart()
  }

  render() {
    return (
      <li className='shopping-item'>
        <img alt="" className='shopping-item__img block' src={this.props.product.image} />
        <h4 className='shopping-item__title font-weight-bold text-2xl mb-1'>{this.props.product.name}</h4>
        <p className='mb-2'>
          <span className="inline-block shopping-item-mrp font-bold">₹ {this.props.product.price.actual}</span>
          <span className="block flex justify-between flex-wrap">
            <span className="inline-block font-bold selling-price line-through gray-100 text-sm">{this.props.product.price.display}</span>
            <span className="inline-block text-green font-bold shopping-item-discount">{this.props.product.discount} % off</span>
          </span>
        </p>
        <button className='btn bg-orange border border-orange hover--text-orange hover--bg-transparent rounded-full m-auto font-bold py-2 block shopping-item__cta'>Add to Cart</button>
      </li>
    );
  }
}



export default ShoppingItem;
