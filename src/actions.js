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