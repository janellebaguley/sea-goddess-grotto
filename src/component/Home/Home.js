import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import octa from '../../assets/octa.png'
import './Home.css'

class Home extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <img src={octa} alt= 'tentacles' className='tentacles'/>
                <footer className='footer'>
                    <nav className='nav-links-f'>
                        <Link to ='/'>Home</Link>
                        <Link to = '/shop'>Shop</Link>
                        <Link to = '/psychic'>Psychic Services</Link>
                        <Link to = '/blog'>Blog</Link>
                        <Link to = '/contact'>Contact</Link>
                        <Link to = '/about'>About</Link>
                    </nav>
                    {/* <img /> */}
                    {/* <img /> */}
                </footer>
            </div>
        )
    }
}
export default withRouter(Home);