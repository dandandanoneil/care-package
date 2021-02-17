import axios from "axios";

export default {
  // Saves a post to the database
  createPost: function(postData) {
    return axios.post("/api/posts/", postData);
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Updates a post's info in the database
  updatePost: function(postData) {
    return axios.put("/api/posts", postData);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a comment to the database
  createComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  },
  // Gets all comments associated with a post id
  getComments: function(postId) {
    return axios.get("/api/comments/" + postId);
  },
  // Updates a comment info in the database
  updateComment: function(commentData) {
    return axios.put("/api/comments", commentData);
  },
  // Deletes the comment with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Updates a user's info in the database
  updateUser: function(id, userData) {
    return axios.put("/api/user/" + id, userData);
  }
};