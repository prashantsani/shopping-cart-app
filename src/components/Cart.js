import React from 'react';
import Header from './Header';
import Footer from './Footer';

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