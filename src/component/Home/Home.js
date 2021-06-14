import React from 'react';
import octa from '../../assets/octa.png'
import './Home.css'

function Home (){
        return(
            <div >
                <img src={octa} alt= 'tentacles' className='tentacles'/>
                <h2>The Sea Goddess Grotto</h2>
                <p>San Diego's first inclusive mermaid performance company proving anyone can achieve their dreams</p>
                <br/>
                <p>Come create some magic with us!</p>
            </div>
        )
  
}
export default Home;