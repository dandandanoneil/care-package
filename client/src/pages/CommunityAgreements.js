import React from "react";
import Wrapper from "../components/Wrapper";
import PageTitle from "../components/PageTitle"
import { Card } from "react-bootstrap";

function CommunityAgreements() {
    return (
        <Wrapper>
            <div className="row justify-content-md-center">
                <div className="col-lg-8">
                    <PageTitle>Community Agreements</PageTitle>
                    <Card style={{ border: "double", borderColor: "#ca885b", display: 'flex', justifyContent: 'center' }}>
                        <Card.Body>
                            <Card.Text>
                                <ol className="">
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>Always operate from a place kindness</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>All community members who follow our agreements are welcome, this is an inclusive space</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>All offers are given freely, as gifts, with no expectation of return</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>Respect one another in every interaction, we are a community</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>Everyone's narrative is valuable, and their own to name</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>We are not a charity, we are run by local communities that choose to participate</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>Harassment of any kind will result in removal from the group</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>All offers and asks must be legal</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>You must be 18+ to participate in the group</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>We believe there is abundance in our communities that can and should be redistributed</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>A gift-economy strengthens the fabric of a local community in exponential ways</li>
                                    <li style={{ color: "#5a5a5a", margin: "5px", fontWeight: "bold" }}>We believe in the strength of communities that have neighbors that look out for neighbors</li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Wrapper>
    );
}

export default CommunityAgreements;