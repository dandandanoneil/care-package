import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Filter from '../Filter'
import "./search.css";


const items = [
    "Chair",
    "Couch",
    "Lamp",
    "Books",
    "Taxes",
    "Legal Assistance"
];

const Search = (props) => {

    return (

        <div>
            <div id="search-filter" className="d-flex justify-content-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange={props.change}
                    style={{ width: "20rem" }}
                ></input> &nbsp;&nbsp;

            {/* <Button style={{
                    color: "white",
                    backgroundColor: "#d05d11",
                    fontWeight: 'bold'
                }} variant="custom">Search</Button>&nbsp; */}
            </div>
            <div>
                <Filter myFilter={props.myFilter} />

            </div>


        </div>
    )
}

export default Search
