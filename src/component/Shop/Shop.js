import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import './Shop.css';

class Shop extends Component {
    render(){
        return(
            <div className = 'shop'>
                <h1>Website under construction, please contact us for details, photos and any inquiries!</h1>
            <h1>MER-chandise</h1>
            
            <h2>Goddess Skirts Starting at $250</h2>
            <p>These gorgeous custom mermaid skirts will make you look and feel like a goddess! Each skirt is lovingly cut and sewn to your measurements. The skirts are twirl worthy, and perfect for a special occasion or just wearing for a day outing. They are comfortable and cool and made in your choice of iridescent colors (limited to what is in stock). All our skirts are made with high quality spandex They have a gorgeous trumpet style skirt that is flattering to any shape and have a matching, elastic free waistband for comfort. We’ve designed our goddess skirts to be sturdy and durable and to withstand playing at the beach or the park. With proper care (our skirts need to be rinsed after a visit to a beach or pool to maintain their shine) our skirts will bring you joy for many years. We think they are comfortable enough to wear as pajamas! The bottom hem is more than 270” around, skirts can vary in length. Our model is 5’8” and the skirt is 43” in length but can be shortened upon request. All our skirts come with a coordinating mask or pouch.</p>
            <br/>
            <p>
            Want something in a different fabric or multiple colors or need a custom size?  We can do that too, please contact us for custom inquiries! 
            </p>
            <br/>
            <p>Upon check out please give us your waist measurement, length from natural waist to floor, mask/pouch preference, and color preference. We will contact you with the available spandex colors that match your preferences before starting your creation.</p>
            <br/>
            <p>
            Please note that these are custom crafted and ordered. Production time can take up to 4 weeks (but we always try to get them done quicker!).
            </p>
            <br/>
            <b>Shipping within the United States is included with the cost. For international orders, please contact us before purchase as shipping/production time and cost will vary.</b>
            <br/>
            
            <br/>
            <h2>Mini-Goddess Skirt Starting at $150</h2>
            <br/>
            <p>
            Our Mini-Goddess skirts are knee length circle skirts that are perfect for twirling! They are also wonderfully whimsical and comfortable for wearing to events, out on the town, or to a theme park. We recommend pairing them with a crinoline for a full look, but they are adorable without one as well! They can be made in either spandex or cotton in your choice of one color/print (color availability is based on what our fabric partners have in stock). You can choose a coordinating spandex waistband (spandex skirts only), a sparkling elastic waistband, or a plain elastic waistband.  Length from waistband to hem is 26” (model is 5’8” for reference). Skirts can be shortened. For longer skirts, additional colors/prints, custom prints, or sizes over a US 28 please contact us for more information before ordering as they may incur additional costs.
            </p>
            <br/>
            <p>Upon check out please give us your waist measurement, length from natural waist to floor, mask/pouch preference, and color preference. We will contact you with the available spandex colors that match your preferences before starting your creation. </p>
            <br/>
            <p>
            Please note that these are custom crafted and ordered. Production time can take up to 3 weeks (but we always try to get them done quicker!). 
            </p>
            <br/>
            <b>Shipping within the United States is included with the cost. For international orders, please contact us before purchase as shipping/production time and cost will vary.</b>
            <br/>
            
            <h2>Custom Kraken Resin Necklaces Starting at $75</h2>
            <p>Handmade by Calypso herself these necklaces are imbued with mermaid magic and made with real crystals, shells, and pearls. Each kraken is a unique resin pour in your choice of colors and can be made with color shifting pigments or matte pigments. Glitter added at no extra charge. To be ocean friendly all glitter is completely encapsulated inside the resin. We only use hypoallergenic silver plated findings. We will match crystals and beads to your specified colors.  The kraken will also be adorned with a few small crystals and beads to match your necklace.  </p>
            <br/>
            <p>
            Please note that some crystals may be unavailable or incur an additional fee if they are extremely rare or difficult to find. If you have a specific crystal, shell, or bead that must be included in the design please reach out to us before ordering to ensure we have it available or can obtain it for you and that it will work with your design! Some crystals are toxic in water or are water soluble or may incur an additional fee. Each kraken necklace also comes with a surprise coordinating hair comb or clip! 
            </p>
            <br/>
            <p>
            Upon check out please specify preferred colors, crystals, and glitter. Please note that some crystals may be unavailable or rare, but we will do our best to match them as best we can! If you have images of your tail, costume, etc. please email them to us so we can use them for reference and color match.
            </p>
            <br/>
            <p>
            Please note that these are custom crafted and ordered. Production time can take up to 2 weeks (but we always try to get them done quicker!).
            </p>
            <br/>
            <b>
            Shipping within the United States is included with the cost. For international orders, please contact us before purchase as shipping/production time and cost will vary.
            </b>
            <br/>
            <p>We also make our own mermaid tiaras, tops, and tails upon request. Please <Link to = '/contact'>contact</Link> us if you would like to inquire about ordering something unique for your event or special day! </p>
            </div>
        )
    }
}
export default withRouter(Shop);