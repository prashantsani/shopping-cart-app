import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';

class Cart extends React.Component {
    render() {
        return (
            <>
            <Header />
            <main>
                <div className='wrap'>
                    This is Cart Page
                </div>
            </main>
            <Footer />
            </>
        )
    }
}

export default Cart;