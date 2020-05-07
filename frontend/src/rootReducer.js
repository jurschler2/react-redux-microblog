import { ADD_POST, UPDATE_POST, DELETE_POST, LOAD_POSTS, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";


// const INITIAL_STATE = {posts:{1: {id: 1, title: "hello world", description: "first post", body: "first body"}}, comments:{}}
const INITIAL_STATE = { posts: {}, comments: {} }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
    case UPDATE_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.formData.id]: {...action.formData} }
      }

    case DELETE_POST:
      const postsCopy = { ...state.posts };
      const commentsCopy = { ...state.comments };
    
      delete postsCopy[action.postId];
      // Remove all comments related to that post
      delete commentsCopy[action.postId];
      
      return {
        posts: postsCopy,
        comments: commentsCopy
      }

    // case LOAD_POSTS:
    //   return {

    //   }

    // case UPDATE_POST:
    //   // technically same code as ADD_POST
    //   return {
    //     ...state,
    //     posts: { ...state.posts, [action.formData.id]: {...action.formData} }
    //   }

    case ADD_COMMENT:
      return {
        ...state,
        comments: { 
          ...state.comments, 
          [action.postId]: {...state.comments[action.postId], [action.formData.id]: {...action.formData}} 
        }
      }

    case DELETE_COMMENT:
      const commentsForPostCopy = { ...state.comments, [action.postId]: {...state.comments[action.postId]} };
      delete commentsForPostCopy[action.postId][action.commentId];
      return {
        ...state,
        comments: commentsForPostCopy
      }

    default:
      return state;
  }
}

export default rootReducer;