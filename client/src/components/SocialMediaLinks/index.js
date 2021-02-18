import React from 'react'
import './style.css'

import instagram from './images/instagram_icon.PNG'
import facebook from './images/facebook_icon.PNG'
import twitter from './images/twitter_icon.PNG'
import linkedin from './images/linkedin_icon.PNG'

const SocialMediaLinks = () => {
    return (
        <section id="social-media">
            <div className="container text-center">
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="blank" rel="noopener noreferrer">  <img src={facebook} alt="facebook icon" /> </a>
                    <a href="https://www.instagram.com" target="blank" rel="noopener noreferrer"><img src={instagram} alt="instagram icon" /></a>
                    <a href="https://twitter.com" target="blank" rel="noopener noreferrer"><img src={twitter} alt="twitter icon" /></a>
                    <a href="https://www.linkedin.com" target="blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon" /></a>
                </div>
            </div>
        </section>
    );
}

export default SocialMediaLinks;
