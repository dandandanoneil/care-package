import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const Search = () => {
    return (
        <div className= "d-flex justify-content-center">
            <input placeholder="Search for a item"></input>
            <Button>Search</Button>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Filter
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
    )
}

export default Search
