import React from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import { TiArrowUnsorted } from 'react-icons/ti';
import { Inventory } from '../../components/Inventory/Inventory';
import axios from 'axios';


export default class Store extends React.Component {
    constructor(){
        super();
        this.state = {
            storeInventory: []
        }
    }
    
    componentDidMount() {
        axios.get(`/cart.json`)
        .then(res => {
            const storeInventory = res.data.items;
            this.setState({ storeInventory });
            console.log(storeInventory)
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
                    <Inventory storeInventory ={this.state.storeInventory}/>                
                </main>
                <Footer />
            </>
        )
    }
}