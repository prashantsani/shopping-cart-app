import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { TiArrowUnsorted } from 'react-icons/ti';


class Store extends React.Component {
    render() {
        return (
            <>
            <Header /> 
            <main>
                <div className='wrap'>
                    This is Store Page <TiArrowUnsorted />
                </div>
            </main>
            <Footer />
            </>
        )
    }
}

export default Store;