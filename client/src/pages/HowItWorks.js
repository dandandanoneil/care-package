import React from "react";
import { Container } from 'react-bootstrap'
import "./HowItWorks.css";
import exchange from './images/exchange.svg';
import contract from './images/contract.svg'
import wheelchair from './images/wheelchair.svg';
import donation from './images/donation.svg';
import united from './images/united.svg'

function PrivacyPolicy() {
    return (

        <Container className="mb-5" >

            <section className="projects" id="projects">
                <div className="max-width">
                    <h1 className="title " className="d-flex justify-content-center" style={{ color: '#d05d11', padding: '40px', textShadow: "1px 1px 2px #000000" }} > <bold> How it Works </bold> </h1>

                    <div className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                                <img src={contract} alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> Sign Up to get started </a></div>


                                <p style={{ color: 'white' }}>Our platform allows for communities in Philadelphia to connect and redistribute goods, services and weatlh completely free</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={wheelchair} alt="" />
                                <div className="text">
                                    <a className="project-img"
                                        href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Accesible
                                </a></div>
                                <p style={{ color: 'white' }}>
                                Choose how and what you want to give or ask for by taking advantage of tags and filters
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={exchange} alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Communicate</a></div>
                                <p style={{ color: 'white' }}>
                                    Once you have found a gift that suits your needs, comment on the post to let the owner know about your interest.
                              
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="box">
                                <img src={donation} alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Delivery</a>
                                </div>
                                <p style={{ color: 'white' }}>Delivery details will be located in the post details but are up to the discretion of the owner and the member expressing their interest to workout.                                    </p>
                            </div>
                        </div>
                        <br></br>
                     
                        <br></br>
                        <div className="card">
                            <div className="box">

                            
                                <img src={united} alt="" />
                                <div className="text">
                                    <a className="project-img" href="" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Make a difference
                                </a></div>
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

export default PrivacyPolicy;