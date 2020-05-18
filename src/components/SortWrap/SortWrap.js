import React, { Component } from 'react';
import './SortWrap.scss';


export class SortWrap extends Component {

  sortDiscount = () => {
    this.props.sortDiscount();
  }

  sortPriceAscending = () => {
    this.props.sortPriceAscending()
  }

  sortPriceDescending = () => {
    this.props.sortPriceDescending()
  }
 
  render() {
    return (
      <div className='flex'>
        <h3 className='text-xl font-bold mr-5'>Sort By</h3>
        <button className='mr-5 inline-block' onClick={this.sortPriceAscending}>Price High to Low</button>
        <button className='mr-5 inline-block' onClick={this.sortPriceDescending}>Price Low to High</button>
        <button className='mr-5 inline-block' onClick={this.sortDiscount}>Discount</button>
      </div>
    );
  }
}



export default SortWrap;
