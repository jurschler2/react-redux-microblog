import React from "react";

/**
 * CommentDetails: Presentational component that is passed a handleDelete function to dispatch a delete comment action
 *    - Parent: CommentList
 */
function CommentDetails({id, commentBody, handleDeleteComment}) {
  const handleDelete = evt => {
    handleDeleteComment(id);
  }

  return (
  <div>
    <p>{commentBody}</p>
    <button onClick={handleDelete}>X</button>
  </div>);
}

export default CommentDetails;