import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import octo6 from '../../../assets/octo6.png';

class Home extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <img src={octo6} alt= 'tentacles'/>
                <footer>
                    <nav>
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