import React from 'react';
import axios from 'axios';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { ProductList } from '../../components/ProductList/ProductList';
import { SortWrap } from '../../components/SortWrap/SortWrap';
import Range from './../../components/Range/Range';
import { comparePrice, compareDiscount  } from './../../helpers';
import { TiArrowUnsorted, TiScissors } from 'react-icons/ti';



export default class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inventory: [], 
            products: [],
            price: {
                min: 0,
                max: 1
            },
            cartItems:[]
        }
    }

    sortDiscount = () => {
        const products = this.state.products.sort(compareDiscount);
        this.setState({products});
    }

    sortPriceAscending = () => {
        const products = this.state.products.sort(comparePrice);
        this.setState({products});
    }
    
    sortPriceDescending = () => {
        const products = this.state.products.sort(comparePrice).reverse();
        this.setState({products});
    }

    addToCart = (id, quantity) => {
        this.setState(
            prevState => ({
                cartItems : [...prevState.cartItems, {id: id, quantity: quantity } ]
            })
        )
    }

    filterInventory = (min=0, max) =>{
        const products = this.state.inventory.filter((item) => {
            const price = item.price.actual;

            if (price>min && price <= max){
                return true
            } else { 
                return false
            }
        });
        this.setState({products});
    }
    
    componentDidMount() {
        axios.get(`https://prashantsani.github.io/shopping-cart-app/cart.json`)
        .then(res => {
            const products = res.data.items;
            let maxPrice = 0;

            for (let i = 0; i<products.length; i++){
                if(products[i].price.actual > maxPrice){
                    maxPrice = products[i].price.actual;
                }
            }

            this.setState( prevState => ({
                    price: {                   
                        ...prevState.price,
                        max: maxPrice
                    },
                    inventory: products,
                    products: products,
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
                            <ProductList addToCart={this.addToCart} products ={this.state.products}/>                
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}