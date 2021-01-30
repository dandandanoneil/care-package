// import React, { useEffect, useState } from "react";
// import API from "../../utils/API";


// function Posts() {
//   // Setting our component's initial state
//   const [posts, setPosts] = useState([])
//   const [formObject, setFormObject] = useState({
//     title: "",
//   })

//   // Load all posts and store them with setposts
//   useEffect(() => {
//     loadPosts()
//   }, [])

//   // Loads all posts and sets them to posts
//   function loadPosts() {
//     API.getPosts()
//       .then(res => 
//         setPosts(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a post from the database with a given id, then reloads posts from the db
//   function deletePost(id) {
//     API.deletePost(id)
//       .then(res => loadPosts())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.savePost method to save the post data
//   // Then reload Posts from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.savePost({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(() => setFormObject({
//           title: "",
//         }))
//         .then(() => loadPosts())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
    
//     );
//   }


// export default Posts;
