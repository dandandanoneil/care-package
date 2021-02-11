import React, { useEffect, useState, useContext } from "react";
import API from "../../utils/API";
import { useLocation } from "react-router-dom";
import UserContext from "../../utils/UserContext";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

import DeleteBtn from "../../components/DeleteBtn";
// import { List, ListItem } from "../../components/List";
// import { TextArea, FormBtn } from "../../components/Form";

function CommentCard(props) {
  // Setting our component's initial state
  const [comments, setComments] = useState([]);
  const [formObject, setFormObject] = useState({
    post: "",
    comment: "",
    created_by: ""
  });
  
  const postId = useLocation().pathname.split('/')[2];
  const { currentUser, loggedIn } = useContext(UserContext);

  // Load all comments and store them with setcomments
  useEffect(() => {
    loadComments()
  }, [])

  // Loads all comments and sets them to comments
  function loadComments() {
    API.getComments(postId)
    .then(res => setComments(res.data))
    .catch(err => console.log(err));
  };

  // Deletes a comment from the database with a given id, then reloads comments from the db
  function deleteComment(id) {
    API.deleteComment(id)
      .then(res => loadComments())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({
      post: postId,
      created_by: currentUser._id,
      [name]: value
    })
  };

  // When the form is submitted, use the API.createComment method to save the comment data
  // Then reload comments from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.comment) {
      API.createComment(formObject)
        .then(() => setFormObject({
          comment: "",
        }))
        .then(() => loadComments())
        .catch(err => console.log(err));
    }
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


    return (
      <Card className="mt-3 mb-3">
        <Card.Header >Comments</Card.Header>
        <Card.Body className="p-3">
          {comments.length ? (
            <ListGroup className="mb-3">
              {comments.map(comment => {
                return (
                  <ListGroupItem key={comment._id}>
                    <div>
                      <em>
                        <strong>{comment.created_by}</strong> on {formatDate(comment.created_at)}:
                      </em>
                      {currentUser._id == comment.created_by ?
                        <DeleteBtn onClick={() => deleteComment(comment._id)}>x</DeleteBtn>
                        : null
                      }
                    </div>
                    <p>
                      {comment.comment} 
                    </p>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          ) : (
            <p className="text-center">No Comments Yet</p>
          )}
          {loggedIn ? (
            <Form className="text-center">
              <Form.Control 
                as="textarea"
                rows={3}
                onChange={handleInputChange}
                name="comment"
                placeholder="Type a comment here to respond to this post..."
                value={formObject.comment}
              />
              <Button
                size="lg"
                variant="custom"
                className="mt-3"
                style={{ color: 'white', background: '#4c68a5' }}
                disabled={!(formObject.comment)}
                onClick={handleFormSubmit}
              >Post Comment
              </Button>
            </Form>
          ) : (
            <p className="text-center">Log In To Add A Comment</p>
          )}
        </Card.Body>
      </Card>
    );
  }

  export default CommentCard;