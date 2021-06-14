import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import './Shop.css';

class Shop extends Component {
    render(){
        return(
            <div className = 'shop'>
            <h1>MER-chandise</h1>
            <img />
            <h2>Goddess Skirts Starting at $200</h2>
            <p>These gorgeous custom mermaid skirts will make you look and feel like a goddess! Each skirt is lovingly cut and sewn to your measurements. The skirts are twirl worthy, and perfect for a special occasion or just wearing for a day outing. They are comfortable and cool and made in your choice of iridescent colors (limited to what is in stock). They have a gorgeous trumpet style skirt that is flattering to any shape and have a matching, elastic free waistband for comfort. They literally are comfortable enough to wear as pajamas! The bottom hem is a very full 270” around. Want something a little different but in the same style? We can do that too, please contact us for custom inquiries! </p>
            <img />
            <h2>Custom Kraken Resin Necklaces Starting at $75</h2>
            <p>Handmade by Calypso herself these necklaces are imbued with mermaid magic and made with real crystals, shells, and pearls. Each kraken is a unique resin pour in your choice of colors and can be made with color shifting pigments or matte pigments. Glitter added at no extra charge. To be ocean friendly all glitter is completely encapsulated inside the resin. We only use hypoallergenic silver plated findings, please reach out to us if custom findings are needed (may incur an additional charge). The kraken will also be adorned with a few small crystals and beads to match your necklace. Please note that some crystals may be unavailable or incur an additional fee if they are extremely rare or difficult to find. Each kraken necklace also comes with a surprise coordinating hair comb or clip! </p>
            <p>We also make our own mermaid tiaras, tops, and tails upon request. Please <Link to = '/contat'>contact</Link> us if you would like to inquire about ordering something unique for your event or special day! </p>
            </div>
        )
    }
}
export default withRouter(Shop);