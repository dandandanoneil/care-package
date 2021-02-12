import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Filter from '../Filter'
import "./search.css";


const Search = (props) => {

    return (

        <div>
            <div id="search-filter" className="d-flex justify-content-center">
                <input
                    type="text"
                    placeholder="Search for an item"
                    value={props.searchTerm}
                    onChange={props.change}

                ></input> &nbsp;&nbsp;

            <Button style={{
                    color: "white",
                    backgroundImage: 'linear-gradient(to right, #d0c311, #d0c311)',
                    fontWeight: 'bold'
                }} variant="custom">Search</Button>&nbsp;
          <Filter />

            </div>


        </div>
    )
}

export default Search
