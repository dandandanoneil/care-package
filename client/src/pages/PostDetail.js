import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import BackButton from "../components/BackButton";
import Image from 'react-bootstrap/Image';
import CommentCard from "../components/CommentCard";

function PostDetail() {
    return (
        <Wrapper>
            <br />
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4 text-left">
                    <p style={{color: "#0f640d"}}>neighborhood</p>
                    <p style={{color: "#0f640d"}}>category</p>
                    <p style={{color: "#0f640d"}}>tags</p>
                </div>
                <div className="col-lg-4">
                    <PageTitle>Post Detail</PageTitle>
                </div>
                <div className="col-lg-4 text-right">
                    <p style={{color: "#941010"}} >Time Sensitive</p>
                    <p style={{color: "#941010"}} >Pick-up Only</p>
                </div>
            </div>
            <br />
            <div className="row justify-content-md-center text-center">
                <div className="col-lg-10">
                    <p style={{color: "#5a5a5a"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum varius odio, eu rhoncus orci tempus non. Phasellus vel leo efficitur, porta ex quis, consequat lectus. Aliquam eget est lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sodales ullamcorper rhoncus. Phasellus dapibus euismod magna, nec tempor tortor elementum vestibulum. Aliquam purus metus, luctus sed nulla mollis, ornare faucibus nunc.</p>
                </div>
            </div>
            <br />
            <div className="row justify-content-md-center text-center">
                <div className="col-lg-3">
                    <Image src={process.env.PUBLIC_URL + "/assets/images/dresser1.png"} fluid alt="Dresser Grey" />
                </div>
                <div className="col-lg-3">
                    <Image src={process.env.PUBLIC_URL + "/assets/images/dresser2.png"} fluid alt="Dresser Grey Open" />
                </div>
                <div className="col-lg-3">
                    <Image src={process.env.PUBLIC_URL + "/assets/images/dresser3.png"} fluid alt="Dresser Grey Decorated" />
                </div>
            </div>
            <br />
            <div className="row justify-content-md-center text-center">
                <BackButton />
            </div>
            <br />
            <div className="row justify-content-md-center text-center">
                <div className="col-lg-9">
                    <CommentCard />
                </div>
            </div>

        </Wrapper>
    );
}

export default PostDetail;