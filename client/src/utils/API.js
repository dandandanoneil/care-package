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
  // Saves a post to the database
  createComment: function(commentData) {
    return axios.post("/api/comments", commentData);
  }
};