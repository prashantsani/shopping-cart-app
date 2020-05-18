import React from 'react';
import axios from 'axios';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { Inventory } from '../../components/Inventory/Inventory';
import { SortWrap } from '../../components/SortWrap/SortWrap';
import Range from './../../components/Range/Range';
import { comparePrice, compareDiscount  } from './../../helpers';
import { TiArrowUnsorted, TiScissors } from 'react-icons/ti';



export default class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            storeInventoryAll: [], 
            storeInventory: [],
            price: {
                min: 0,
                max: 1
            },
            cartItems:[]
        }
    }

    sortDiscount = () => {
        const storeInventory = this.state.storeInventory.sort(compareDiscount);
        this.setState({storeInventory});
    }

    sortPriceAscending = () => {
        const storeInventory = this.state.storeInventory.sort(comparePrice);
        this.setState({storeInventory});
    }
    
    sortPriceDescending = () => {
        const storeInventory = this.state.storeInventory.sort(comparePrice).reverse();
        this.setState({storeInventory});
    }

    addToCart = () => {

    }

    filterInventory = (min=0, max) =>{
        const storeInventory = this.state.storeInventoryAll.filter((item) => {
            const price = item.price.actual;

            if (price>min && price <= max){
                return true
            } else { 
                return false
            }
        });
        this.setState({storeInventory});
    }
    
    componentDidMount() {
        axios.get(`https://prashantsani.github.io/shopping-cart-app/cart.json`)
        .then(res => {
            const storeInventory = res.data.items;
            let maxPrice = 0;

            for (let i = 0; i<storeInventory.length; i++){
                if(storeInventory[i].price.actual > maxPrice){
                    maxPrice = storeInventory[i].price.actual;
                }
            }

            this.setState( prevState => ({
                    price: {                   
                        ...prevState.price,
                        max: maxPrice
                    },
                    storeInventoryAll: storeInventory,
                    storeInventory: storeInventory,
                })
            );
        })
    }
    

    render() {
        const cartLinkVisibility = true;
        return (
            <>
                <Header cartLink={cartLinkVisibility} cart={this.state.cartItems.length} /> 
                <main>
                    <div className='wrap'>
                        <h1 className='text-3xl'>Welcome to ReactJS Store</h1> 
                    </div>
                    <div className='my-5 flex justify-between wrap'>
                        {/* Left Column */}
                        <div className='filters'>
                            <h3 className="mb-4">Filters</h3>
                            <Range filterInventory={this.filterInventory} price={this.state.price} />
                        </div>

                        {/* Right Column */}
                        <div className='ml-5 pl-5'>
                            <SortWrap sortDiscount={this.sortDiscount} sortPriceAscending={this.sortPriceAscending} sortPriceDescending={this.sortPriceDescending} />
                            <Inventory addToCart={this.addToCart} storeInventory ={this.state.storeInventory}/>                
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}