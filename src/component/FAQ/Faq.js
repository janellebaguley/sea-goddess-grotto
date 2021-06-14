import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './Faq.css'

function Faq (){
    return(
        <div className='meet'>
            <h1>FAQ</h1>
            <p>Do you offer services for non profit organizations? Yes we do! If you are a non-profit organization please reach out to us for further information. We love giving back to our community! </p>
            <br/>
            <p>How are you an “inclusive” company? The Sea Goddess Grotto is run by an LGBTQ+ couple. We are both women of color, body positive, and Calypso is disabled (you can sometimes catch a few pictures of her service dog on Instagram!). We want everyone to feel comfortable and represented with our organization and do everything possible to make sure that goal is achieved. </p>
            <br/>
            <p>What is a professional mermaid and how do I become one? Professional mermaids are licensed businesses that operate like any other party or event company. We specialize in creating unique magical experiences for our customers. It’s a real full time job! If you are interested in becoming a professional yourself, please become one of our Patrons. We offer lots of tutorials and Q&amp;A sessions to Patrons to help them on their journeys.</p>
            <br/>
            <p>Can you really swim in that tail? Yes! Calypso is fully trained in the use of her tail (and other costuming) with over a decade of professional mermaid experience. She is able to glide through the water just like a fish and can freedive up to 15 feet. </p>
            <br/>
            <p>Where do I get a mermaid tail? We offer custom tails via <Link to = '/contact'> request </Link> only, or there are lots of online resources for purchasing a tail. </p>
        </div>
    )
}
export default withRouter(Faq);