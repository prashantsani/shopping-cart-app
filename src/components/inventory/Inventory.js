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
            <Range price={this.props.price} />
          </div>
          
          <ul className='unstyled shopping-list ml-2 pl-2 grid grid-cols-5 gap-5'>
            { this.props.storeInventory.map(inventory => <ShoppingItem key={inventory.id} inventory={inventory} />)}
          </ul>
      </div>
    )
  }
}

export default Inventory
