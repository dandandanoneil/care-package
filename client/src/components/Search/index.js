import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Filter from '../Filter'

const Search = () => {
    return (
        <div className= "d-flex justify-content-center">
            <input placeholder="Search for a item"></input> &nbsp;&nbsp;
            <Button>Search</Button>&nbsp;
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Filter
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Filter />
 
  </Dropdown.Menu>
</Dropdown>
      
        </div>
    )
}

export default Search
