import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ModalSignUp from "../ModalSignUp";

import clarkParkPhoto from "./images/clark-park.jpg";
import northPhiladelphiaPhoto from "./images/north-philadelphia.jpg";
import schuykillBanksPhoto from "./images/schuykill-banks-park.jpg";
import westPhillyPhoto from "./images/west-philadelphia.jpg";

import communityAgreementsBtn from "./buttons/community-agreements.png";
import ourMissionBtn from "./buttons/our-mission.png";
import userStoriesBtn from "./buttons/user-stories.png";

import "./HeroCarousel.css";

function HeroCarousel() {
    return (
        <Carousel>
            <Carousel.Item interval={3500} style={{ backgroundImage: `url(${clarkParkPhoto})`, backgroundSize: "100%", minHeight: "500px", width: "100%" }}>
                <Carousel.Caption>
                    <ModalSignUp />
                    <br /><br />
                    <div
                        className="p-3 rcorners"
                        style={{ backgroundColor: "#d05d11", cursor: "auto", opacity: 0.9, textShadow: "2px 2px 4px #000000" }}
                    >
                        <strong>Join our community to start sharing, receiving, and connecting to the people in your community!</strong>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3500} style={{ backgroundImage: `url(${northPhiladelphiaPhoto})`, backgroundSize: "100%", minHeight: "500px", width: "100%" }}>
                <Carousel.Caption>
                    <div className="d-flex justify-content-center">
                        <a href="/mission" >
                            <img className="img-button" src={ourMissionBtn} alt="Our Mission" />
                        </a>
                    </div>
                    <br /><br />
                    <div
                        className="p-3 rcorners"
                        style={{ backgroundColor: "#d05d11", opacity: 0.9, textShadow: "2px 2px 4px #000000" }}
                    >
                        <strong>We've built a de-monetized community marketplace to encourage giving gifts where there's abundance and asking for help when there's need.</strong>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3500} style={{ backgroundImage: `url(${schuykillBanksPhoto})`, backgroundSize: "100%", minHeight: "500px", width: "100%" }}>
                <Carousel.Caption>
                    <div className="d-flex justify-content-center">
                        <a href="/community-agreements" >
                            <img className="img-button" src={communityAgreementsBtn} alt="Community Agreements" />
                        </a>
                    </div>
                    <br /><br />
                    <div
                        className="p-3 rcorners"
                        style={{ backgroundColor: "#d05d11", opacity: 0.9, textShadow: "2px 2px 4px #000000" }}
                    >
                        <strong>We're proud of the platform we've built, and are excited for people to make it their own - but it only works if we're all playing by the same rules.</strong>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3500} style={{ backgroundImage: `url(${westPhillyPhoto})`, backgroundSize: "100%", minHeight: "500px", width: "100%" }}>
                <Carousel.Caption>
                    <div className="d-flex justify-content-center">
                        <a href="/user-stories" >
                            <img className="img-button" src={userStoriesBtn} alt="User Stories" />
                        </a>
                    </div>
                    <br /><br />
                    <div
                        className="p-3 rcorners"
                        style={{ backgroundColor: "#d05d11", opacity: 0.9, textShadow: "2px 2px 4px #000000" }}
                    >
                        <strong>But don't take our word for it - read more about the Care Package platform from the folks in your community who are already using it to connect to each other.</strong>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;