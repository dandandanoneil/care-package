import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Card } from "react-bootstrap";
import { List, ListItem } from "../../components/List";
import { TextArea, FormBtn } from "../../components/Form";

function CommentCard() {
  // Setting our component's initial state
  const [comments, setComments] = useState([])
  const [formObject, setFormObject] = useState({
    comment: "",
  })

  // Load all comments and store them with setcomments
  useEffect(() => {
    loadComments()
  }, [])

  // Loads all comments and sets them to comments
  function loadComments() {
    API.getComments()
      .then(res =>
        setComments(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a comment from the database with a given id, then reloads comments from the db
  function deleteComments(id) {
    API.deleteComments(id)
      .then(res => loadComments())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveComment method to save the comment data
  // Then reload comments from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.comment) {
      API.saveComment({
        comment: formObject.comment,
      })
        .then(() => setFormObject({
          comment: "",
        }))
        .then(() => loadComments())
        .catch(err => console.log(err));
    }
  };

    return (
      <Card>
        <form>
          <TextArea
            onChange={handleInputChange}
            name="comment"
            placeholder="Respond to the post..."
            value={formObject.comment}
          />
          <FormBtn 
            disabled={!(formObject.comment)}
            onClick={handleFormSubmit}
          >
            Submit
              </FormBtn>
        </form>
        <row>
          {comments.length ? (
                <List>
                  {comments.map(comment => {
                    return (
                      <ListItem key={comment._id}>
                        <a href={"/comments/" + comment._id}>
                          <strong>
                            {comment.comment} by {comment.user}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => deleteComments(comment._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <p>No Results to Display</p>
              )}
          </row>
      </Card>
    );
  }

  export default CommentCard;