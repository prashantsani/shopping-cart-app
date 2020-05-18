import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import './Range.scss';


export class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {min: this.props.price.min, max: this.props.price.max},
    };
  }

  handleChange = (value) => {
    this.setState({ value });
    this.props.filterInventory(value.min, value.max)
  }

  componentDidUpdate = (prevProps,prevState) =>{
    // This is done because this.props.price.max keeps on changing
    // We should not bind the values directly to value attribute of <InputRange /> (inside render() )
    // If we do so, the range dragger will not work as the values will permanently bind to the input 

    if( prevProps.price.max !== this.props.price.max ){
      this.setState( {value: {min: this.props.price.min, max: this.props.price.max} } )
    }
  }
 
  render() {
    return (
      <>
      <InputRange
        maxValue={this.props.price.max}
        minValue={0}
        value={this.state.value}
        onChange={value => this.handleChange( value ) } />
      </>
    );
  }
}



export default Range;
