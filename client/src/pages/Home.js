import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import Banner from "../components/Banner";

const items = [
    "Chair",
    "Couch",
    "Lamp",
    "Books",
    "Taxes",
    "Legal Assistance"
];

const Home = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = items.filter(item =>
            item.toLowerCase().includes(searchTerm.trim())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <>
            <HeroCarousel />
            <Buttons />
            <br></br>
            <Banner change={handleChange} searchTerm={searchTerm} />
            <Cards searchResults={searchResults} />
        </>
    );
}

export default Home;

