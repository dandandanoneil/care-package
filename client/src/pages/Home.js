import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
    return (
        <Carousel>
          <Carousel.Item interval={3500}>
            <img id='header-img' 
              className="d-block w-100"
              src="https://www.mayoarts.org/wp-content/uploads/2018/02/planned-giving.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span>Our mission</span></h3>
              <p><span>“Since you get more joy out of giving joy to others, you should put a good deal of thought into the happiness that you are able to give.”</span></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <img id='header-img' 
              className="d-block w-100"
              src="https://www.uhd.edu/academics/public-service/social-work/PublishingImages/uhd_solidarity_circles.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3><span>About Us</span></h3>
              <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id='header-img' 
              className="d-block w-100"
              src="https://www.allbusiness.com/asset/2018/08/User-reviews-1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3><span>Community Voice</span></h3>
              <p><span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</span></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
}


export default Home
