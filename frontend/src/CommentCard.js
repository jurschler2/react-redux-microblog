import React from "react";

/**
 * CommentCard: Presentational component that is passed a handleDelete function 
 * to dispatch a delete comment action
 *    - Parent: CommentList
 */
function CommentCard({id, text, handleDeleteComment}) {
  const handleDelete = evt => {
    handleDeleteComment(id);
  }
  return (
  <div>
    <p>{text}</p>
    <button onClick={handleDelete}>X</button>
  </div>);
}

export default CommentCard;