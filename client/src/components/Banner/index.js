import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(props) {
    return (
        <div className="mb-3 p-4"
            style={{
                backgroundImage: 'linear-gradient(to right, #4c68a5, #021247)',
                color: 'white',
                textAlign: "center"
            }}
        >
            <h1 className="d-flex justify-content-center" style={{ color: '#d0b313', textShadow: "2px 2px 4px #000000" }}>Free Marketplace</h1>
            <Row className="justify-content-center">
                <Col lg="4" md="6" sm="8">
                    {props.children}
                </Col>
            </Row>
        </div>
    )
}

export default Banner