import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';


export class NotFound extends Component {
  render() {
    const cartLinkVisibility = true;
    return (
      <>
        <Header cartLink={cartLinkVisibility}/>
        <main>
          <div className='wrap'>
            <h2>Page Not Found</h2>
            <Link to='/'>Return to Home Page</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}

export default NotFound
