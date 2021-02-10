import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import Image from 'react-bootstrap/Image';

function MeetTeam() {
    return (
        <Wrapper>
            <PageTitle>Our Team</PageTitle>
            <div className="row justify-content-md-center text-center">
                <div className="col-lg-3">
                    <Image src="https://avatars.githubusercontent.com/u/69398269?s=400&u=8c5fd9ad3df9263a7587305c05e0a8ae6b75e743&v=4" fluid roundedCircle alt="Dan O'Neil" />
                    <h3 style={{color: "#5a5a5a"}} className="mt-3">Dan O'Neil</h3>
                    <a style={{color: "#021247"}} href="https://github.com/dandandanoneil" target="blank">GitHub</a>
                    <span> | </span>
                    <a style={{color: "#021247"}} href="https://www.linkedin.com/in/dhoneil/" target="blank">LinkedIn</a>
                    <p style={{color: "#5a5a5a"}}>Full-stack web developer, strong communicator, leader and team player with expertise in project planning and management, collaborative problem solving, & creative thinking acquired over a 10 year career in theatre as a creative producer, director, casting director, and administrator.</p>
                </div>
                <div className="col-lg-3">
                    <Image src="https://avatars.githubusercontent.com/u/15930792?s=400&u=c989600869b8202c838cc8e044805a5da1c1cfa4&v=4" fluid roundedCircle alt="Luis Canahuate" />
                    <h3 style={{color: "#5a5a5a"}} className="mt-3">Luis Canahuate</h3>
                    <a style={{color: "#021247"}} href="https://github.com/canahuate16" target="blank">GitHub</a>
                    <span> | </span>
                    <a style={{color: "#021247"}} href="https://www.linkedin.com/in/luis-canahuate-3aa23610a/" target="blank">LinkedIn</a>
                    <p style={{color: "#5a5a5a"}}>Donec vestibulum at turpis sed mollis. Mauris ultricies justo velit, non malesuada erat ullamcorper id. Quisque pharetra venenatis imperdiet. Praesent eleifend, ligula nec consectetur tincidunt, dui urna lobortis dolor, ac eleifend eros quam non erat. Sed interdum finibus dui eget hendrerit. Phasellus fermentum elit erat, at congue lectus semper non. Curabitur sed risus cursus, gravida est a, viverra dui. Duis sollicitudin sem vel quam blandit, quis euismod justo tristique. Praesent tempus vel lorem nec lobortis. Donec pharetra nunc ut orci commodo dictum. Donec in ante eget ante fringilla gravida.</p>
                </div>
                <div className="col-lg-3">
                    <Image src="https://avatars.githubusercontent.com/u/68611714?s=400&u=55a05137ba0556c73b2def2d0c9c1461f7913598&v=4" fluid roundedCircle alt="Skyler Dakota Lawton" />
                    <h3 style={{color: "#5a5a5a"}} className="mt-3">Skyler Dakota Lawton</h3>
                    <a style={{color: "#021247"}} href="https://github.com/skylerdakota" target="blank">GitHub</a>
                    <span> | </span>
                    <a style={{color: "#021247"}} href="https://www.linkedin.com/in/skyler-dakota-lawton/" target="blank">LinkedIn</a>
                    <p style={{color: "#5a5a5a"}}>Philadelphia-based aspiring full stack web developer in the Penn LPS Coding Bootcamp. Passionate about using tech for social change.</p>
                </div>
            </div>
        </Wrapper>
    );
  }

export default MeetTeam;