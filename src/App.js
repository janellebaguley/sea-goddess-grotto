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
                        <Link to = '/performancesandevents' className='nav-links-f'>Performances and Events</Link>
                        <Link to = '/MER-chandise' className='nav-links-f'>MER-chandise</Link>
                        <Link to = '/meetthemermaids' className='nav-links-f'>Meet the Mermaids</Link>
                        {/* <Link to='/patron' className='nav-links-f'>Patron</Link> */}
                        {/* <Link to = '/gallery' className='nav-links-f'>Gallery</Link> */}
                        {/* <Link to = '/blog' className='nav-links-f'>Blog</Link> */}
                        <Link to = '/contact' className='nav-links-f'>Contact</Link>
                        <Link to = '/faq' className='nav-links-f'>FAQ</Link>
                        {/* <Link to = '/documents' className='nav-links-f'>Documents</Link> */}
                        {/* <Link to = '/policies' className='nav-links-f'>Policies</Link> */}
                    {/* <a href='https://www.instagram.com/seagoddessgrotto/'><img src= {} alt='instagram'/></a> */}
                    </nav>
                    {/* <img /> */}
                    {/* <img /> */}
                </footer>
    </div>
  );
}

export default withRouter(App);