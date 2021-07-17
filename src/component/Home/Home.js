import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import lloni from '../../assets/land_Loni.jpg'
import './Home.css'

function Home (){
        return(
            <div >
                <img src={lloni} alt= 'Mermaid Calypso' className='tentacles'/>
                <Link to = '/contact'><button className = 'btn'>Contact Us</button></Link> 
                {/* <h2>The Sea Goddess Grotto</h2> */}
                <p>San Diego's first inclusive mermaid performance company proving anyone can achieve their dreams</p>
                <br/>
                <p>Come create some magic with us!</p>
            </div>
        )
  
}
export default withRouter(Home);