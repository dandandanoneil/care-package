// import '../components/Buttons/node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Buttons from "../components/Buttons";
import Modal from "../components/Modal";
import Search from "../components/Search"
import Cards from "../components/Cards"

const Home = () => {
    return (
        <div> 
            <Carousel>
            <Carousel.Item interval={3500}>
                    <img id='header-img' 
                      className="d-block w-100"
                      src="https://hb.imgix.net/c7a33020a39902ba99d24814c1323628f5404f32.png?auto=compress,format&s=699fdf7e381250735bbdda2e2475d4d1"
                      alt="Signup"
                    />
                    <Carousel.Caption>
                        <h3><span><Modal /></span></h3>
                        <p><span>Join our community to start sharing!</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
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
          <Buttons />
         <br></br>
          <Search />
          <Cards />
         
        </div>
    );
}

export default Home;

