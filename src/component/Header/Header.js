import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu'
import './Header.css'

function Header(){
        return(
            <div>
                <header className='container'><h1>The Sea Goddess Grotto</h1>
                    <section className='nav-links'>
                        <Link to ='/' >Home</Link>
                        <Link to = '/performancesandevents' >Performances and Events</Link>
                        <Link to = '/meetthemermaids' >Meet the Mermaids</Link>
                        <Link to = '/gallery' >Gallery</Link>
                        <Link to = '/blog' >Blog</Link>
                        <Link to = '/contact' >Contact</Link>
                        <Link to = '/faq' >FAQ</Link>
                        <Link to = '/documents'>Documents</Link>
                        <Link to = '/policies' >Policies</Link>
                    </section>
                </header>
            </div>
        )
}
export default withRouter(Header)