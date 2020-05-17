import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';

class Cart extends React.Component {
    render() {
        const cartLinkVisibility = false;
        return (
            <>
            <Header cartLink={cartLinkVisibility}/>
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