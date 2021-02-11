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
        <Card className="mb-3" border="danger">
                <a href={`/post/${props.post._id}`}>
                    <Card.Header style={{ color: "white", backgroundColor: "#d05d11"}}>
                        <em>
                            {props.post.offerRequestEvent === "offer" ? "offer→ " : null}
                            {props.post.offerRequestEvent === "request" ? "request→ " : null}
                            {props.post.offerRequestEvent === "event" ? "event→ " : null}
                        </em>
                        {props.post.title}
                        {props.post.comments ?
                        <Badge pill variant="light" style={{ float: "right", color: "#4c68a5" }}>
                            {props.post.comments.length}
                        </Badge>
                        : null }
                    </Card.Header>
                </a>
                <Card.Body style={{ backgroundColor: "#fcfcfc"}}>
                    {props.post.imageURL ?
                        <a href={`/post/${props.post._id}`}>
                            <Image fluid src={props.post.imageURL} />
                        </a>
                    : null }
                    <p><small><strong>Posted On: </strong>{formatDate(props.post.created_at)}</small></p>
                    <Card.Text>
                        {props.post.description}
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}

export default ActivePostsCard;