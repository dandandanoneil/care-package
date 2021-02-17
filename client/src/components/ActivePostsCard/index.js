import React from "react";
import "./ActivePostsCard.css";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";


function ActivePostsCard(props) {
    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <Card className="mb-3 card-shad" style={{ height: "375px" }}>
            <a href={`/post/${props.post._id}`}>
                {/* Offer Card Header */}
                {props.post.offerRequestEvent === "offer" ? (
                    <Card.Header style={{ color: "white", backgroundColor: "#d0c311" }}>
                        {props.post.title}
                        {props.post.comments ?
                            <Badge pill variant="light" style={{ float: "right", color: "#4c68a5" }}>{props.post.comments.length}</Badge>
                            : null}
                    </Card.Header>
                ) : (
                        null
                    )}
                {/* Request Card Header */}
                {props.post.offerRequestEvent === "request" ? (
                    <Card.Header className='card-header' style={{ color: "white", backgroundColor: "#d05d11" }}>
                        {props.post.title}
                        {props.post.comments ?
                            <Badge pill variant="light" style={{ float: "right", color: "#4c68a5" }}>{props.post.comments.length}</Badge>
                            : null}
                    </Card.Header>
                ) : (
                        null
                    )}
                {/* Event Card Header */}
                {props.post.offerRequestEvent === "event" ? (
                    <Card.Header style={{ color: "white", backgroundColor: "#4c69a5" }}>
                        <em>event→</em>
                        {props.post.title}
                        {props.post.comments ?
                            <Badge pill variant="light" style={{ float: "right", color: "#4c68a5" }}>{props.post.comments.length}</Badge>
                            : null}
                    </Card.Header>
                ) : (
                        null
                    )}
            </a>
            <Card.Body className='active-card' style={{ backgroundColor: "#fcfcfc", overflowY: "scroll" }}>
                <h6><em><strong>
                    {props.post.offerRequestEvent}→ {props.post.category}
                </strong></em></h6>
                {props.post.imageURL ?
                    <a href={`/post/${props.post._id}`} className="mb-2">
                        <Image fluid src={props.post.imageURL} />
                    </a>
                    : null}
                <Card.Text>
                    {props.post.description}
                    <div><small><strong>Posted On: </strong>{formatDate(props.post.created_at)}</small></div>
                    {props.post.location ? (
                        <div><small><strong>Location: </strong>{props.post.location}</small></div>
                    ) : (null)}
                    {props.post.searchTags ? (
                        <div><small><strong>Tags: </strong>{props.post.searchTags}</small></div>
                    ) : (null)}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ActivePostsCard;