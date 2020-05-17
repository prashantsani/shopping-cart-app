import React from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import CartItem from './../../components/CartItem/CartItem';

class Cart extends React.Component {
    render() {
        const cartLinkVisibility = false;
        return (
            <>
                <Header cartLink={cartLinkVisibility}/>
                <main>
                    <div className='wrap'>
                        <h3 className='text-3xl'>Cart</h3>

                        <ul className='unstyled cart-list'>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </ul>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Cart;