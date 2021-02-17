import React, { useEffect, useState } from "react";
import API from "../utils/API";

import Wrapper from "../components/Wrapper";
import ActivePostsCard from "../components/ActivePostsCard";
import Search from '../components/Search';
import Filter from '../components/Filter';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Posts() {
    const [allPosts, setAllPosts] = useState([]);
    let [searchResults, setSearchResults]= useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterObject, setFilterObject] = useState({
        offerRequestEvent: "",
        type: "",
        category: "",
        location: "",
        timeSensitive: false,
        onlineRemote: false,
        pickUpOnly: false,
        atCurbNow: false,
        dropOffNeeded: false,
        lackConsistentCommunication: false,
        limitedCapacity: false,
        groupRequest: false
    });

    // This code runs on page load only
    useEffect(() => {
        API.getPosts()
        .then(dbPosts => setAllPosts(dbPosts.data))
        .catch(err => console.log(err));
    }, []);
    
    // This code runs every time the search input changes
    useEffect(() => {
        searchPosts(searchTerm)
    }, [searchTerm, allPosts]);

    // This code runs every time the filter inputs change
    useEffect(() => {
        filterPosts()
    }, [filterObject, allPosts]);

    function filterPosts() {
        // Filters the allPosts array and excludes the post if the filterObject criteria is not matched
        const results = allPosts.filter(item => {
            // Radio buttons
            if (filterObject.offerRequestEvent === "offer" && item.offerRequestEvent !== "offer") return false;
            if (filterObject.offerRequestEvent === "request" && item.offerRequestEvent !== "request") return false;
            if (filterObject.offerRequestEvent === "event" && item.offerRequestEvent !== "event") return false;
            if (filterObject.type === "good" && item.type !== "good") return false;
            if (filterObject.type === "service" && item.type !== "service") return false;
            // Dropdown selects
            if (filterObject.category !== "" && item.category !== filterObject.category) return false;
            if (filterObject.location !== "" && item.location !== filterObject.location) return false;
            // Check boxes
            if (filterObject.timeSensitive && !item.timeSensitive) return false;
            if (filterObject.onlineRemote && !item.onlineRemote) return false;
            if (filterObject.pickUpOnly && !item.pickUpOnly) return false;
            if (filterObject.atCurbNow && !item.atCurbNow) return false;
            if (filterObject.dropOffNeeded && !item.dropOffNeeded) return false;
            if (filterObject.lackConsistentCommunication && !item.lackConsistentCommunication) return false;
            if (filterObject.limitedCapacity && !item.limitedCapacity) return false;
            if (filterObject.groupRequest && !item.groupRequest) return false;
            return true;
        });
        // If the item passed all the applied filters
        setSearchResults(results);
    }

    function searchPosts(searchTerm) {
        // Searches the allPosts array and includes the post if the search term appears in any of the fields
        const term = searchTerm.toLowerCase().trim();
        const results = allPosts.filter(item => {
                // All posts have these fields
            if (item.offerRequestEvent.toLowerCase().includes(term)) return true;
            if (item.title.toLowerCase().includes(term)) return true;
            if (item.description.toLowerCase().includes(term)) return true;
            if (item.category.toLowerCase().includes(term)) return true;
                // Only some posts have these fields, so we have to check that they exist first
            if (item.searchTags && item.searchTags.toLowerCase().includes(term)) return true;
            if (item.searchTags && item.location.toLowerCase().includes(term)) return true;
            if (item.requestOnBehalfOf && item.requestOnBehalfOf.toLowerCase().includes(term)) return true;
            if (item.offerCapacity && item.offerCapacity.toLowerCase().includes(term)) return true;
            if (item.personsRequestingService && item.personsRequestingService.toLowerCase().includes(term)) return true;
            if (item.eventSpaceRules && item.eventSpaceRules.toLowerCase().includes(term)) return true;
            if (item.eventHostOrg && item.eventHostOrg.toLowerCase().includes(term)) return true;
            if (item.cashAppHandle && item.cashAppHandle.toLowerCase().includes(term)) return true;
            if (item.venmoHandle && item.venmoHandle.toLowerCase().includes(term)) return true;
            if (item.payPalEmail && item.payPalEmail.toLowerCase().includes(term)) return true;

            // If the search term wasn't found
            return false;
        });
        setSearchResults(results);
    };
    
    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    };

    function handleCheckChange(event) {
        if (event.target.checked) {
            setFilterObject({
                ...filterObject,
                [event.target.name]: true
            });
        } else {
            setFilterObject({
                ...filterObject,
                [event.target.name]: false
            });
        }
    };

    function handleRadioChange(event) {
        if (event.target.checked) {
            setFilterObject({
                ...filterObject,
                [event.target.name]: event.target.value
            })
        }
    };

    function handleSelectChange(event) {
        if ((event.target.value === "All Categories") || 
            (event.target.value === "All Locations")) {
            setFilterObject({
                ...filterObject,
                [event.target.name]: ""
            });
        } else {
            setFilterObject({
                ...filterObject,
                [event.target.name]: event.target.value
            });
        }
    };

    function clearFilters() {
        setFilterObject({
            offerRequestEvent: "",
            type: "",
            category: "",
            location: "",
            timeSensitive: false,
            onlineRemote: false,
            pickUpOnly: false,
            atCurbNow: false,
            dropOffNeeded: false,
            lackConsistentCommunication: false,
            limitedCapacity: false,
            groupRequest: false
        });
    }

    return (
        <Wrapper>
            <Card border="primary" className="mt-3">
                <Card.Header style={{ backgroundColor: "#4c68a5", color: "white" }} variant="secondary" className="text-center">
                    <br/>
                    <h1>Free Marketplace</h1>
                    <br/>
                    <Row className="justify-content-center">
                        <Col sm="10">
                            <Search
                                searchTerm={searchTerm}
                                handleChange={handleSearchChange}
                            />
                            <Filter
                                filterObject={filterObject}
                                handleCheck={handleCheckChange}
                                handleRadio={handleRadioChange}
                                handleSelect={handleSelectChange}
                                clearFilters= {clearFilters}
                            />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-3" style={{ backgroundColor: "#cad5eb" }}>
                    {searchResults.length === 0 ? (
                        <div className="text-center" style={{ color: "#4c68a5" }}>
                            <br/>
                            <h3 ><em>No posts to display</em></h3>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                        ) : (
                            <Row className="mb-5">
                            {searchResults.map(post => (
                                <Col xl="2" md="3" xs="6" key={post._id} >
                                    <ActivePostsCard post={post}/>
                                </Col>
                            ))}
                        </Row>
                    )} 
                </Card.Body>
            </Card>
        </Wrapper>
    );
}
export default Posts;