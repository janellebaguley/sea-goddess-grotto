import React from 'react'
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import Header from './component/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <footer className='footer'  >
                    <nav className='nav-links-f'>
                        <Link to ='/' className='nav-links-f'>Home</Link>
                        <Link to = '/shop' className='nav-links-f'>Shop</Link>
                        <Link to = '/events' className='nav-links-f'>Events</Link>
                        <Link to = '/blog' className='nav-links-f'>Blog</Link>
                        <Link to = '/contact' className='nav-links-f'>Contact</Link>
                        <Link to = '/about' className='nav-links-f'>About</Link>
                    </nav>
                    {/* <img /> */}
                    {/* <img /> */}
                </footer>
    </div>
  );
}

export default withRouter(App);