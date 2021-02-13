import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./HowItWorks.css";

function PrivacyPolicy() {
    return (

        <Container className="mb-5" >

            <section className="projects" id="projects">
                <div className="max-width">
                    <h2 className="title " className="d-flex justify-content-center" style={{ color: '#d05d11', padding: '40px', textShadow: "1px 1px 2px #000000" }} > <bold> How it Works </bold> </h2>

                    <div className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                                <img src="https://mast2.org/wp-content/uploads/2019/10/sign-up-masters-in-cash-300x300.png" alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> Sign Up to get started </a></div>


                                <p style={{ color: 'white' }}>Lalalalalalalaalala !!</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src="https://cdn1.iconfinder.com/data/icons/birthday-10/24/giving_present_birthday_gift_box-512.png" alt="Note-Taker" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Give or request</a></div>
                                <p style={{ color: 'white' }}>
                                    More LALALALALA alc dal da ijsdaiofaodfasm ofa</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src="" alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Something else</a>
                                </div>
                                <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src="" alt="" />
                                <div className="text">
                                    <a className="project-img"
                                        href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>One More thing
                                Engine</a></div>
                                <p style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src="" alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>More more
                                Dashboard</a></div>
                                <p style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default PrivacyPolicy;