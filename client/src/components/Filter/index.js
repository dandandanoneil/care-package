import React, { useState } from 'react';
import "./filter.css";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filter(props) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    if(!show) return setShow(true);
    setShow(false);
    props.clearFilters();
  }

  return (
    <Card style={{ color: "black" }}>
      <Card.Header
        onClick={toggleShow}
        className=""
        style={{
          color: "white",
          fontSize: "1.25rem",
          backgroundColor: "#d0c311",
          cursor: "pointer"
        }}
      >
        {show ? (
          <div>
            <span style={{ float: "left"}}>Clear Filters</span>
            <span style={{ float: "right"}}>▲</span>
          </div>
        ) : (
          <div>
            <span style={{ float: "left"}}>Add Filters</span>
            <span style={{ float: "right"}}>▼</span>
          </div>
        )}
      </Card.Header>
      {show ? (
        <Form className="p-3">
          <Form.Group>
            <Form.Check inline defaultChecked type="radio" label="All" name="offerRequestEvent" onChange={props.handleRadio} value="" />
            <Form.Check inline type="radio" label="Offers" value="offer" name="offerRequestEvent" onChange={props.handleRadio} />
            <Form.Check inline type="radio" label="Requests" value="request" name="offerRequestEvent" onChange={props.handleRadio} />
            <Form.Check inline type="radio" label="Events" value="event" name="offerRequestEvent" onChange={props.handleRadio} />
          </Form.Group>
          <Form.Group>
            <Form.Check inline defaultChecked type="radio" label="All" name="type" onChange={props.handleRadio} value="" />
            <Form.Check inline type="radio" label="Goods" name="type" onChange={props.handleRadio} value="good" />
            <Form.Check inline type="radio" label="Services" name="type" onChange={props.handleRadio} value="service" />
          </Form.Group>
          <Form.Group>
            <Row>
              <Col sm="6">
                <Form.Control as="select" name="category" onChange={props.handleSelect}>
                  <option defaultValue>All Categories</option>
                  <option>Kitchen</option>
                  <option>Tools</option>
                  <option>Garden</option>
                  <option>Clothing</option>
                  <option>Furniture</option>
                  <option>Automotive</option>
                  <option>Entertainment</option>
                  <option>Household Supplies</option>
                  <option>Toiletries</option>
                  <option>Baby & Child</option>
                  <option>Electronic</option>
                  <option>Appliances</option>
                  <option>Legal</option>
                  <option>Physical Labor</option>
                  <option>Financial Advice</option>
                  <option>Educational</option>
                  <option>Transportation</option>
                  <option>Beauty & Wellness</option>
                  <option>Household</option>
                  <option>Lessons</option>
                  <option>Pet</option>
                  <option>Real Estate</option>
                  <option>Housing</option>
                  <option>Educational</option>
                  <option>Medical</option>
                  <option>Reparations</option>
                  <option>Skill Building</option>
                  <option>Child Support</option>
                  <option>Wellness Support</option>
                  <option>Other</option>
                </Form.Control>
              </Col>
              <Col sm="6">
                <Form.Control as="select" name="location" onChange={props.handleSelect}>
                  <option defaultValue>All Locations</option>
                  <option>Bridesburg-Kensington-Port Richmond</option>
                  <option>Bucks County</option>
                  <option>Center City</option>
                  <option>Chester County</option>
                  <option>Delaware County</option>
                  <option>Far Northeast Philadelphia</option>
                  <option>Germantown-Chestnut Hill</option>
                  <option>Lower North Philadelphia</option>
                  <option>Montgomery County</option>
                  <option>Near Northeast Philadelphia</option>
                  <option>Olney-Oak Lane</option>
                  <option>Roxborough-Manayunk</option>
                  <option>South Philadelphia</option>
                  <option>Southwest Philadelphia</option>
                  <option>Upper North Philadelphia</option>
                  <option>West Philadelphia</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <small>
              <Form.Check inline type="checkbox" label="Time Sensitive" name="timeSensitive" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="Online/Remote" name="onlineRemote" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="Pick Up Only" name="pickUpOnly" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="At Curb Now" name="atCurbNow" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="Drop Off Needed" name="dropOffNeeded" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="Lack Access to Consistent Communication Methods" name="lackConsistentCommunication" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="Limited Capacity" name="limitedCapacity" onChange={props.handleCheck} />
              <Form.Check inline type="checkbox" label="Group Request" name="groupRequest" onChange={props.handleCheck} />
            </small>
          </Form.Group>
        </Form>
      ) : (
        null
      )}
    </Card>

  );
}

export default Filter;