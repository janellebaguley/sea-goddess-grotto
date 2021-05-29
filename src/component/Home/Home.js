import React, {Component} from 'react';

import octa from '../../assets/octa.png'
import './Home.css'

class Home extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div >
                <img src={octa} alt= 'tentacles' className='tentacles'/>
                
            </div>
        )
    }
}
export default Home;