import React from 'react';
import FormControl from "react-bootstrap/FormControl";

function Search(props) {
    return (
        <FormControl
            size="lg" 
            width="100%"
            className="mb-2"
            type="text"
            placeholder="Search"
            value={props.searchTerm}
            onChange={props.handleChange}
        />
    );
}

export default Search;