import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
import './Header.css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            dropdownView: false
        }
    }

    toggleDropdown = () => {
        this.setState({dropdownView: !this.state.dropdownView})
      }
        render(){
        return(
            <div>
                <header className='header-container'>
                    <h1>The Sea Goddess Grotto</h1>
                    <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdownView
          ? (
            <nav className='mobile-menu'>
                <Link to ='/' className='nav-links'>Home</Link>
                <Link to = '/performancesandevents'  className='nav-links'>Performances and Events</Link>
                <Link to = '/MER-chandise' className='nav-links'>MER-chandise</Link>
                <Link to = '/meetthemermaids' className='nav-links'>Meet the Mermaids</Link>
                <Link to = '/gallery' className='nav-links'>Gallery</Link>
                {/* <Link to = '/blog' className='nav-links'>Blog</Link> */}
                <Link to = '/contact' className='nav-links'>Contact</Link>
                <Link to = '/faq' className='nav-links'>FAQ</Link>
                {/* <Link to = '/documents' className='nav-links'>Documents</Link> */}
                {/* <Link to = '/policies' className='nav-links'>Policies</Link> */}
            </nav>
            )
            : null}
                </header>
            </div>
        )
        }
}
export default withRouter(Header)