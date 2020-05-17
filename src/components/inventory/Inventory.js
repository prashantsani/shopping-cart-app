import React, { Component } from 'react';
import './Inventory.scss';
import ShoppingItem from '../shopping-item/ShoppingItem';

export class Inventory extends Component {
  render() {
    return (
      <div className="shopping-list-wrap flex justify-between wrap">
          <div className="filters">
            <h3>Filters</h3>
          </div>
          <ul className='shopping-list ml-2 pl-2 flex justify-between flex-wrap'>
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
            <ShoppingItem />
          </ul>
      </div>
    )
  }
}

export default Inventory
