import React from "react";
import CommentDetails from "./CommentDetails";
import NewCommentForm from "./NewCommentForm";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addComment, deleteComment } from "./actions";

/**
 * CommentList: Component that pulls state of comments from individual posts
 *    - Parent: PostDetails
 */
function CommentList({ postId }) {

  // To add a useSelector to get comments
  const comments = useSelector(store => store.comments[postId], shallowEqual);
  const dispatch = useDispatch();

  const handleAddComment = (formData) => {
    dispatch(addComment(postId, formData));
  }

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(postId, commentId));
  }

  const renderComments = () => {
    return (
      Object.keys(comments).map(key => (
        <CommentDetails key={comments[key].id}
          id={comments[key].id}
          commentBody={comments[key].commentBody}
          handleDeleteComment={handleDeleteComment}
        />
      )))
  }

  return (
    <div>
      <b>Comments</b>
      <div>
        {comments ? renderComments() : <p>No comments</p>}
      </div>
      <div>
        <NewCommentForm handleAddComment={handleAddComment} />
      </div>
    </div>);
}

export default CommentList;