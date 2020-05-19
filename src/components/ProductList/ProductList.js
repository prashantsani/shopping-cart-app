import React, { Component } from 'react';
import './ProductList.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';


export class ProductList extends Component {

  render() {
    // const newLocal = <span className='text-3xl'>{this.props.price.max}</span>;
    return (
      <ul className='unstyled shopping-list grid grid-cols-1 md--grid-cols-2 lg--grid-cols-3 xl--grid-cols-5 gap-5'>
        { this.props.products.map((product, index) => <ShoppingItem addToCart={this.props.addToCart} key={index} id={product.id} product={product} />)}
      </ul>
    )
  }
}

export default ProductList
