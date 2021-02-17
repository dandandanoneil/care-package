import React from "react";
import { Container } from 'react-bootstrap'
import "./HowItWorks.css";
import exchange from './images/exchange.svg';
import contract from './images/contract.svg'
import wheelchair from './images/wheelchair.svg';
import donation from './images/donation.svg';
import united from './images/united.svg'

function HowItWorks() {
    return (
        <Container className="mb-5" >
            <section className="projects" id="projects">
                <div className="max-width">
                    <h1 className="d-flex justify-content-center title" style={{ color: '#d05d11', padding: '40px', textShadow: "1px 1px 2px #000000" }} > <strong> How it Works </strong> </h1>
                    <div className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                                <img src={contract} alt="contract-icon" />
                                <div className="text">
                                    <button className="project-img"   style={{
                                         color: 'white',
                                          float: "right",
                                          background: "none",
                                          border: "none" }}> Sign Up to get started </button></div>
                                <p style={{ color: 'white' }}>Our platform allows for communities in Philadelphia to connect and redistribute goods, services and weatlh completely free</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={wheelchair} alt="accessibility-icon" />
                                <div className="text">
                                    <button className="project-img"
                                         style={{
                                            color: 'white',
                                             float: "right",
                                             background: "none",
                                             border: "none" }}>Accessible
                                </button></div>
                                <p style={{ color: 'white' }}>
                                Choose how and what you want to give or ask for by taking advantage of tags and filters
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={exchange} alt="exchange-icon" />
                                <div className="text">
                                    <button className="project-img"   style={{
                                         color: 'white',
                                          float: "right",
                                          background: "none",
                                          border: "none" }}>Communicate</button></div>
                                <p style={{ color: 'white' }}>
                                    Once you have found a gift that suits your needs, comment on the post to let the owner know about your interest.                       
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={donation} alt="donation-icon" />
                                <div className="text">
                                    <button className="project-img"   style={{
                                         color: 'white',
                                          float: "right",
                                          background: "none",
                                          border: "none" }}>Delivery</button>
                                </div>
                                <p style={{ color: 'white' }}>Delivery details will be located in the post details but are up to the discretion of the owner and the member expressing their interest to workout.                                    </p>
                            </div>
                        </div>
                        <br></br>
                     
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={united} alt="united-icon" />
                                <div className="text">
                                    <button className="project-img"   style={{
                                         color: 'white',
                                          float: "right",
                                          background: "none",
                                          border: "none" }}>Make a difference
                                </button></div>
                                <p style={{ color: 'white' }}>
                                We believe in the strength of communities that have neighbors that look out for neighbors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default HowItWorks;