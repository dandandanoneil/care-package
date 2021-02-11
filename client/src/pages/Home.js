import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import { CardDeck, Form } from 'react-bootstrap'
const items = [
    {
        image: "https://godolly.com/wp-content/uploads/2019/04/9B90AF87-8EFF-4C73-BAB0-0B093BAA101D.jpeg",
        title: "Leather Couch",
        text: "Leather couch in mild conditions, very confortable with no visible discoloring",
        type: "goods",
        update: "Last updated 3 mins ago"
    },
    {
        image: "https://www.sefiles.net/merchant/1929/images/site/SouthPhillypics003.jpg",
        title: "Kids bicycle",
        text: "Metal fan no longer needed. It works great and is not very noisy",
        type: "goods",
        update: "Last updated 3 mins ago"
    },
    {
        image: "https://lh3.googleusercontent.com/-YUYVs2pXjmc8fluITFhLDf5-cziydPyqsNSEqPEZNJtDIWN7qOTNr66DwQqNI3mijDvn5VPPxnb2N0NNA=s1600",
        title: "House Painting",
        text: "Will help  painting houses! I have some spare colors and tools",
        type: "services",
        update: "Last updated 3 mins ago"
    },
    {
        image: "https://i.ebayimg.com/images/g/S0sAAOSwwgddC65r/s-l640.jpg",
        title: "Floor metal fan",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
        type: "goods",
        update: "Last updated 3 mins ago"
    },
    {
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/1/15/iStock-516844708_colorful-garden-path.jpg.rend.hgtvcom.616.462.suffix/1516141969592.jpeg",
        title: "Landscaping",
        text: "Free gardening help and flowers",
        type: "services",
        update: "Last updated 3 mins ago"
    }
];
const Home = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = items.filter(item =>
            item["title"].toLowerCase().includes(searchTerm.trim())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const quickFilter = filterType => e => {
        if (e.target.checked) {
            const results = items.filter(item =>
                item["type"].toLowerCase().includes(filterType.trim())
            );
            setSearchResults(results);
        }
        else {
            setSearchResults(items);
        }
    }
    return (
        <>
            <HeroCarousel />
            <Buttons />
            <br></br>
            <Banner change={handleChange} searchTerm={searchTerm} />
            <Form.Check inline label="Goods" style={{ display: 'inline' }} onChange={quickFilter("goods")} />
            <Form.Check inline label="Services" style={{ display: 'inline' }} onChange={quickFilter("services")} />
            <CardDeck className="mb-5">
                {searchResults.map(item => (
                    <Cards item={item} />
                ))}
            </CardDeck>
            {/* <Cards searchResults={searchResults} /> */}
        </>
    );
}
export default Home;