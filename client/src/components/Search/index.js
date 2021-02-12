import React from 'react';
import Filter from '../Filter';
import "./search.css";

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
            </div>
            <div>
                <Filter myFilter={props.myFilter} />
            </div>
        </div>
    )
}

export default Search;