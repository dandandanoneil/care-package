import React from "react";
import "./style.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import exchange from '../../pages/images/exchange.svg';
import contract from '../../pages/images/contract.svg'
import wheelchair from '../../pages/images/wheelchair.svg';
import donation from '../../pages/images/donation.svg';
import united from '../../pages/images/united.svg';

function HowItWorksBanner() {
    return (
        <a href="/how-it-works" className="hidden-link">
            <div className="mt-5 banner">
                <h1 style={{ padding: '20px', textShadow: "1px 1px 2px #000000" }}>How it Works</h1>
                <Row className="justify-content-center">
                    <Col className="text-center" sm="4" lg="2">
                        <Image fluid as={Row} src={contract} alt="contract-icon" />
                        <Col className="text" style={{ color: 'white', float: "right", background: "none", border: "none" }}>Signup</Col>
                    </Col>
                    <Col className="text-center" sm="4" lg="2">
                        <Image fluid as={Row} src={wheelchair} alt="wheelchair-icon" />
                        <Col className="text" style={{ color: 'white', float: "right", background: "none", border: "none" }}>Access</Col>
                    </Col>
                    <Col className="text-center" sm="4" lg="2">
                        <Image fluid as={Row} src={exchange} alt="exchange-icon" />
                        <Col className="text" style={{ color: 'white', float: "right", background: "none", border: "none" }}>Connect</Col>
                    </Col>
                    <Col className="text-center" sm="4" lg="2">
                        <Image fluid as={Row} src={donation} alt="donation-icon" />
                        <Col className="text" style={{ color: 'white', float: "right", background: "none", border: "none" }}>Deliver</Col>
                    </Col>
                    <Col className="text-center" sm="4" lg="2">
                        <Image fluid as={Row} src={united} alt="united-icon" />
                        <Col className="text" style={{ color: 'white', float: "right", background: "none", border: "none" }}>Impact</Col>
                    </Col>
                </Row>
            </div>
        </a>
    )
}

export default HowItWorksBanner;