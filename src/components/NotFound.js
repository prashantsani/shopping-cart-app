import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


export class NotFound extends Component {
  render() {
    return (
      <>
      <Header />
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
