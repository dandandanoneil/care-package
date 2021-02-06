import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Filter from '../Filter'
import "./search.css";

const Search = () => {
    return (
        <div id="search-filter" className= "d-flex justify-content-center">
            <input placeholder="Search for an item"></input> &nbsp;&nbsp;
            <Button style={{ color: "white"}} variant="custom">Search</Button>&nbsp;
          <Filter />
        </div>
    )
}

export default Search
