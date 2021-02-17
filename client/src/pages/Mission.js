import React from "react";

import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import Image from 'react-bootstrap/Image';

function MeetTeam() {
    return (
        <Wrapper>
            <PageTitle>Mission</PageTitle>
            <div className="row justify-content-md-center">
                <div className="col-lg-8 text-center">

                    <h5 style={{color: "#5a5a5a"}}>Our aim is to create an accessible platform to unify local communities around resource sharing. 
                    <br/> By actively engaging in a gift-economy we are able to reduce our collective consumption and redistribute wealth. 

                    Care Package allows users to easily interchange goods and services as an act of mutual aid and community support without a middle-man
                    tech platform taking a cut for profit.</h5>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-lg-8 text-center">
                    <Image src={process.env.PUBLIC_URL + "/assets/images/circles.png"} fluid alt="Venn Diagram of Giving" />
                </div>
            </div>
            <br />
        </Wrapper>
    );
}

export default MeetTeam;