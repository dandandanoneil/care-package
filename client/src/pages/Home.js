import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <> 
            <HeroCarousel />
            <Buttons />
            <br></br>
            <Banner />
            <Cards />
        </>
    );
}

export default Home;

