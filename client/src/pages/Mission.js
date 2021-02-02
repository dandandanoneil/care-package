import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";

function MeetTeam() {
    return (
        <Wrapper>
            <PageTitle>Mission</PageTitle>
            <div className="row justify-content-md-center">
                <div className="col-lg-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum varius odio, eu rhoncus orci tempus non. Phasellus vel leo efficitur, porta ex quis, consequat lectus. Aliquam eget est lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sodales ullamcorper rhoncus. Phasellus dapibus euismod magna, nec tempor tortor elementum vestibulum. Aliquam purus metus, luctus sed nulla mollis, ornare faucibus nunc.</p>
                </div>
            </div>
        </Wrapper>
    );
  }

export default MeetTeam;