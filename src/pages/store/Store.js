import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import { TiArrowUnsorted } from 'react-icons/ti';
import { Inventory } from '../../components/inventory/Inventory';


class Store extends React.Component {
    render() {
        return (
            <>
            <Header /> 
            <main>
                <div className='wrap'>
                    <h1 className='text-3xl'>Welcome to ReactJS Store</h1> <TiArrowUnsorted />
                </div>  
                <Inventory />                
            </main>
            <Footer />
            </>
        )
    }
}

export default Store;