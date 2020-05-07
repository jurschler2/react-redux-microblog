import React from "react";
import CommentCard from "./CommentCard";
import NewCommentForm from "./NewCommentForm";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addSingleCommentFromAPI, deleteSingleCommentFromAPI } from "./actions";

/**
 * CommentList: Component that pulls state of comments from individual posts
 *    - Parent: PostDetails
 *    - Relationship: PostDetails => CommentList => CommentCard
 */
function CommentList({ postId }) {

  const comments = useSelector(store => store.posts[postId].comments, shallowEqual);
  const dispatch = useDispatch();

  const handleAddComment = (formData) => {
    dispatch(addSingleCommentFromAPI(postId, formData));
  }

  const handleDeleteComment = (commentId) => {
    dispatch(deleteSingleCommentFromAPI(postId, commentId));
  }

  const renderComments = () => {
    return (
      comments.map(c => (
        <CommentCard key={c.id}
          id={c.id}
          text={c.text}
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