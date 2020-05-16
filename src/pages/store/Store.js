import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
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