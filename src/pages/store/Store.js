import React from 'react';
import axios from 'axios';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { TiArrowUnsorted, TiScissors } from 'react-icons/ti';
import { Inventory } from '../../components/Inventory/Inventory';



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
                <Header cartLink={cartLinkVisibility}/> 
                <main>
                    <div className='wrap'>
                        <h1 className='text-3xl'>Welcome to ReactJS Store</h1> <TiArrowUnsorted />
                    </div>  
                    <Inventory addToCart={this.addToCart} filterInventory={this.filterInventory} price={this.state.price} storeInventory ={this.state.storeInventory}/>                
                </main>
                <Footer />
            </>
        )
    }
}