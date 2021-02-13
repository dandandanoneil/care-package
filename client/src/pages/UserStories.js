import React from "react";

import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import Image from 'react-bootstrap/Image';

function UserStories() {
    return (
        <Wrapper>
            <PageTitle>User Stories</PageTitle>
            <div className="row justify-content-md-center text-center">
                <div className="col-lg-3">
                    <Image src="" fluid roundedCircle alt="User Story Jennifer" />
                    <h3 style={{color: "#5a5a5a"}} className="mt-3">Jennifer</h3>
                    <p style={{color: "#d05d11", fontWeight: "bold"}}>West Philadelphia</p>
                    <p style={{color: "#5a5a5a"}}>"With a new baby on the way, every cent saved matters for us. 
                    With Care Package we were able to find a stroller, baby clothing and an abundance of other supplies. 
                    I feel super grateful to have this resource in our neighborhood and plan to pass everything 
                    along again when we no longer need it!"</p>
                </div>
                <div className="col-lg-3">
                    <Image src="" fluid roundedCircle alt="User Story Marcion" />
                    <h3 style={{color: "#5a5a5a"}} className="mt-3">Marcion</h3>
                    <p style={{color: "#d05d11", fontWeight: "bold"}}>Northern Liberties</p>
                    <p style={{color: "#5a5a5a"}}>"While in between jobs I had a temporary lapse in medical insurance coverage.
                    I got into a biking accident and was left with a mountain of debt. I posted my story here and was able 
                    to pay it all off. Having so many people show up for me in my time of need was life changing.
                    Care package has changed the way I see my neighbors and community."</p>
                </div>
                <div className="col-lg-3">
                    <Image src="" fluid roundedCircle alt="User Story Yeasmin" />
                    <h3 style={{color: "#5a5a5a"}} className="mt-3">Yeasmin</h3>
                    <p style={{color: "#d05d11", fontWeight: "bold"}}>Bella Vista</p>
                    <p style={{color: "#5a5a5a"}}>"I work for a non-profit and it can be a challenge to get the word out when
                    there is a need for resources. Finding a platform like Care Package that streamlines community exchange 
                    messages has more than doubled the event participation we get from our community. It is really rewarding
                    to see such a shift. Renews your faith in humanity." </p>
                </div>
            </div>
            <br />
        </Wrapper>
    );
  }

export default UserStories;