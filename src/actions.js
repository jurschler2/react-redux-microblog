import axios from "axios";
// Different action functions.
import {ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function addPost (formData) {
  return {
    type: ADD_POST,
    formData: formData
  }
}

export function updatePost (formData) {
  return {
    type: UPDATE_POST,
    formData: formData
  }
}

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId: postId
  }
}

export function loadPosts (posts) {
  return {
    type: DELETE_POST,
    posts: posts
  }
}

export function addComment (postId, formData) {
  return {
    type: ADD_COMMENT,
    postId: postId,
    formData: formData,
  }
}

export function deleteComment (postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId: postId,
    commentId: commentId
  }
}

export function getTodosFromAPI() {
  return async function(dispatch) {
    // dispatch(startLoad());

    try {
      let res = await axios.get(
          'http://localhost:5000/api/posts/');
      dispatch(loadPosts(res.data));
      // {posts: res.data[0]}
    }

    catch(err) {
      // dispatch(showErr(err.response.data));
      console.log("you failed api posts get");
    }
  }
}