import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import lloni from './Loni_homepage.png'
import './Home.css'

function Home (){
        return(
            <div >
                <div className = 'container'>
                
                <img src={lloni} alt= 'Mermaid Calypso' className='big-photo'/>
                <Link to = '/contact'><button className = 'btn'>Contact Us</button></Link> 
                <p class='home'>San Diego's first inclusive mermaid performance company proving anyone can achieve their dream. Come create some magic with us!</p>
                {/* <h2>The Sea Goddess Grotto</h2> */}
                
                </div>
            </div>
        )
  
}
export default withRouter(Home);