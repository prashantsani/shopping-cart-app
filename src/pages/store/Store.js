import React from 'react';
import axios from 'axios';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { TiArrowUnsorted } from 'react-icons/ti';
import { Inventory } from '../../components/Inventory/Inventory';



export default class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            storeInventory: [], 
            price: {
                min: 0,
                max: 1
            }
        }
    }
    
    componentDidMount() {
        axios.get(`https://prashantsani.github.io/shopping-cart-app/cart.json`)
        .then(res => {
            const storeInventory = res.data.items;
            let maxPrice = 0;
            this.setState({ storeInventory });
            for (let i = 0; i<storeInventory.length; i++){
                if(storeInventory[i].price.actual > maxPrice){
                    maxPrice = storeInventory[i].price.actual;
                }
            }
            this.setState( prevState => ({
                    price: {                   // object that we want to update
                        ...prevState.price,    // keep all other key-value pairs
                        max: maxPrice       // update the value of specific key
                    }
                })
            )
            console.log('!----------->', this.state.price.max)
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
                    <Inventory price={this.state.price} storeInventory ={this.state.storeInventory}/>                
                </main>
                <Footer />
            </>
        )
    }
}