import React, { Component } from 'react';
import './Inventory.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import Range from '../Range/Range';

export class Inventory extends Component {

  render() {
    // const newLocal = <span className='text-3xl'>{this.props.price.max}</span>;
    return (
      <div className='shopping-list-wrap flex justify-between wrap'>
          <div className='filters'>
            <h3 className="mb-4">Filters</h3>
            <Range filterInventory={this.props.filterInventory} price={this.props.price} />
          </div>
          
          <ul className='unstyled shopping-list ml-2 pl-2 grid grid-cols-1 md--grid-cols-2 lg--grid-cols-3 xl--grid-cols-5 gap-5'>
            { this.props.storeInventory.map((inventory, index) => <ShoppingItem addToCart={this.props.addToCart} key={index} id={inventory.id} inventory={inventory} />)}
          </ul>
      </div>
    )
  }
}

export default Inventory
