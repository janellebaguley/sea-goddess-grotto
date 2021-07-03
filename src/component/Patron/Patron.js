import React from 'react'
import Patreon from '../assets/patreon.png'
import './Patron.css'

export default function Patron(){
    return(
        <div>
            <h2>Patreon</h2>
            <br/>
            <p>
            Want to experience some mermaid magic, but maybe don’t have a need for a large scale event or a party? Come be a Patron! On our patreon page we offer several different tiers to fit your budget and needs. In some tiers you will have access to our free public events calendar (we do at least 2 a month!), tutorials and patterns on how we make and alter our costuming, Q&A sessions, video chats, mermaid oracle readings, and so much more!
            </p>
            <br/>
            <img src={Patreon} alt='Patreon Link' />
        </div>
    )
}