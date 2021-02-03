import {Form,Row,Col} from 'react-bootstrap'
import React from 'react'



const Filter = () => {
    return (
      <Form>
        <p>Type</p>
  <Form.Check inline label="Goods" />
  <Form.Check inline label="Services" />


</Form>
    )
}

export default Filter
