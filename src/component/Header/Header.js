import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
    }
}
    toggleDropdown = () => {
        this.setState({open: !this.state.open})
    }

    render(){
        return(
            <div>
                <header>The Sea Goddess Grotto</header>
                <section>
                <HamburgerMenu 
                isOpen = {this.state.open} 
                menuClicked = {this.toggleDropdown}
                width={30}
                height={22}
                color='white'
                position='fixed'
                z-index = {10}
                justify-content = 'right'
                />
            
            {this.state.open
          ? (
                <nav>
                    <Link to ='/'>Home</Link>
                    <Link to = '/shop'>Shop</Link>
                    <Link to = '/psychic'>Psychic Services</Link>
                    <Link to = '/blog'>Blog</Link>
                    <Link to = '/contact'>Contact</Link>
                    <Link to = '/about'>About</Link>
                </nav>
            )
            : null}
            </section>
                
            </div>
        )
    }
}
export default withRouter(Home)