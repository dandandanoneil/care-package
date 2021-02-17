import React from 'react'
import './style.css'
import instagram from './images/instagram_icon.PNG'
import facebook from './images/facebook_icon.PNG'
import twitter from './images/twitter_icon.PNG'
// import whatsapp from './images/whatsapp_icon.PNG'
import linkedin from './images/linkedin_icon.PNG'
// import snapchat from './images/snapchat_icon.PNG'

const Socialmedia = () => {
    return (
        <section id="social-media">
            <div class="container text-center">

                <div class="social-icons">
                    <a href="https://www.facebook.com" target="blank" rel="noopener noreferrer">  <img src={facebook} /> </a>
                    <a href="https://www.instagram.com" target="blank" rel="noopener noreferrer"><img src={instagram} /></a>
                    <a href="https://twitter.com" target="blank" rel="noopener noreferrer"><img src={twitter} /></a>
                    {/* <a href="https://www.whatsapp.com/?lang=en"><img src={whatsapp} /></a> */}
                    <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer"><img src={linkedin} /></a>
                    {/* <a href="https://www.snapchat.com/"><img src={snapchat} /></a> */}


                </div>
            </div>
        </section>
    )
}

export default Socialmedia
