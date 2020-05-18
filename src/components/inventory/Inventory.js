import React, { Component } from 'react';
import './Inventory.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';


export class Inventory extends Component {

  render() {
    // const newLocal = <span className='text-3xl'>{this.props.price.max}</span>;
    return (
      <ul className='unstyled shopping-list grid grid-cols-1 md--grid-cols-2 lg--grid-cols-3 xl--grid-cols-5 gap-5'>
        { this.props.storeInventory.map((inventory, index) => <ShoppingItem addToCart={this.props.addToCart} key={index} id={inventory.id} inventory={inventory} />)}
      </ul>
    )
  }
}

export default Inventory
