import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  createPost: function(postData) {
    return axios.post("/api/posts/", postData);
  },
  // Gets all comments associated with a post id
  getComments: function(postId) {
    return axios.get("/api/comments/" + postId);
  },
  // Gets the comment with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the comment with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a comment to the database
  createComment: function(commentData) {
    return axios.post("/api/comments", commentData);
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
  },
  // Gets all posts associated with a specific user
  getUserPosts: function(userId) {
    return axios.get("/api/posts/user/" + userId);
  },
};