import axios from "axios";
// Different action functions.
import {ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, LOAD_TITLES, LOAD_SINGLE_POST, SHOW_ERROR, ADD_TITLE } from "./actionTypes";

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

export function loadTitles (titleIdsToTitles) {
  return {
    type: LOAD_TITLES,
    titles: titleIdsToTitles
  }
}

export function addTitle (newTitle) {
  return {
    type : ADD_TITLE,
    newTitle: newTitle
  }
}

export function loadSinglePosts (singlePost) {
  return {
    type: LOAD_SINGLE_POST,
    singlePost: singlePost
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

export function showErr (errorSinglePost) {
  return {
    type: SHOW_ERROR,
    errorSinglePost: errorSinglePost
  }
}

export function getTitlesFromAPI() {
  return async function(dispatch) {
    // dispatch(startLoad());

    try {
      let res = await axios.get(
          'http://localhost:5000/api/posts/');
      // Convert the array received from the API into a nested object
      // for use within the frontend of the app.

      let titleIdsToTitles = {};
      res.data.forEach(t => titleIdsToTitles[t.id] = t);

      dispatch(loadTitles(titleIdsToTitles));
    }

    catch(err) {
      // dispatch(showErr(err.response.data));
      console.log("you failed api title get");
    }
  }
}

export function getSinglePostFromAPI(id) {
  return async function(dispatch) {
    // dispatch(startLoad());

    try {
      let res = await axios.get(
          `http://localhost:5000/api/posts/${id}`);
      // Convert the array received from the API into a nested object
      // for use within the frontend of the app.
      let singlePost = res.data
      dispatch(loadSinglePosts(singlePost));
    }

    catch(err) {

      let errorSinglePost = err.response.data;
      dispatch(showErr(errorSinglePost));
      console.log("you failed api posts get");
    }
  }
}

export function addSinglePostFromAPI(formData) {
  return async function(dispatch) {
    // dispatch(startLoad());

    try {
      let res = await axios.post(
          `http://localhost:5000/api/posts/`, formData);

      // Convert the array received from the API into a nested object
      // for use within the frontend of the app.
      let newTitle = {id: res.data.id, title: res.data.title, description: res.data.description}
      dispatch(addTitle(newTitle));
    }

    catch(err) {
      // dispatch(showErr(err.response.data));
      console.log("you failed api posts get");
    }
  }
}