import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import lloni from '../../assets/land_Loni.jpg'
import './Home.css'

function Home (){
        return(
            <div >
                <div className = 'container'>
                <p>San Diego's first inclusive mermaid performance company proving anyone can achieve their dream. <br/>Come create some magic with us!</p>
                <img src={lloni} alt= 'Mermaid Calypso' className='big-photo'/>
                <Link to = '/contact'><button className = 'btn'>Contact Us</button></Link> 
                {/* <h2>The Sea Goddess Grotto</h2> */}
                
                </div>
            </div>
        )
  
}
export default withRouter(Home);