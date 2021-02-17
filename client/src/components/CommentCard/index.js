import React, { useState, useContext } from "react";
import API from "../../utils/API";
import { useLocation } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import './post-btn.css'

function CommentCard(props) {
  // Setting our component's initial state
  const [comments, setComments] = useState(props.comments);
  const [formObject, setFormObject] = useState({
    post: "",
    comment: "",
    created_by: ""
  });
  const [editId, setEditId] = useState("")
  const [editObject, setEditObject] = useState({
    _id: "",
    post: "",
    comment: "",
    created_by: ""
  });

  const postId = useLocation().pathname.split('/')[2];
  const { currentUser, loggedIn } = useContext(UserContext);

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

  // Handles updating component state when the user types into the create comment input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({
      post: postId,
      created_by: currentUser._id,
      [name]: value
    })
  };

  // When the create comment form is submitted, use the API.createComment method to save the comment data
  // Then reload comments from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.comment) {
      API.createComment(formObject)
        .then(() => setFormObject({ comment: "" }))
        .then(() => loadComments())
        .catch(err => console.log(err));
    }
  };

  // Handles updating component state when the user types into the create comment input field
  function handleEditChange(event) {
    setEditObject({
      ...editObject,
      comment: event.target.value
    })
  };

  // When the edit comment form is submitted, use the API.updateComment method to save the comment data
  // Then reload comments from the database
  function handleEditSubmit(event) {
    event.preventDefault();
    if (editObject.comment) {
      API.updateComment(editObject)
        .then(() => setEditId(""))
        .then(() => loadComments())
        .catch(err => console.log(err));
    }
  };

  function handleDiscardChanges(event) {
    event.preventDefault();
    setEditId("");
    setEditObject({
      _id: "",
      post: "",
      comment: "",
      created_by: ""
    })
  };

  function editComment(comment) {
    setEditId(comment._id);
    setEditObject({
      _id: comment._id,
      post: comment.post,
      comment: comment.comment,
      created_by: comment.created_by._id
    });
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <Card className="mt-3 mb-3">
      <Card.Header style={{ backgroundColor: "#4c68a5", color: "#FFFFFF" }}>Comments</Card.Header>
      <Card.Body className="p-3" style={{ backgroundColor: "#cad5eb" }}>
        {comments.length ? (
          <ListGroup className="mb-3">
            {comments.map(comment => {
              return (
                <ListGroupItem key={comment._id}>
                  <div>
                    <strong>
                      <a href={`/user/${comment.created_by._id}`}>{comment.created_by.name}</a>
                    </strong> on {formatDate(comment.created_at)}:
                      {comment.created_by._id === currentUser._id ? (
                      <button
                        onClick={() => editComment(comment)}
                        data={comment}
                        style={{
                          float: "right",
                          color: "#4c68a5",
                          background: "none",
                          border: "none"
                        }}
                      ><small>Edit</small></button>
                    ) : (
                        null
                      )}
                  </div>
                  {comment._id === editId ? (
                    <Form>
                      <Form.Control
                        as="textarea"
                        name="comment"
                        defaultValue={editObject.comment}
                        onChange={handleEditChange}
                      ></Form.Control>
                      <Button size="sm" className="mt-1 ml-1 post-btn" variant="warning" style={{ float: "right", backgroundColor: "#d0c311" }} onClick={handleEditSubmit}>Update</Button>
                      <Button size="sm" className="mt-1 ml-1 post-btn" variant="primary" style={{ float: "right", backgroundColor: "#4c68a5" }} onClick={handleDiscardChanges}>Discard Changes</Button>
                      <Button size="sm" className="mt-1 ml-1 post-btn" variant="danger" style={{ float: "right", backgroundColor: "#d05d11" }} onClick={deleteComment}>Delete</Button>
                    </Form>
                  ) : (
                      <p>
                        {comment.comment}
                      </p>
                    )}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        ) : (
            <p className="text-center">No Comments Yet</p>
          )}
        {loggedIn && editId === "" ? (
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
              className="mt-3 post-btn"
              style={{ color: 'white', background: '#4c68a5' }}
              disabled={!(formObject.comment)}
              onClick={handleFormSubmit}
            >Post Comment
              </Button>
          </Form>
        ) : (
            null
          )}
      </Card.Body>
    </Card>
  );
}

export default CommentCard;