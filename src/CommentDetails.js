import React from "react";

function CommentDetails({id, commentBody, removeComment}) {

  const handleRemove = evt => {
    removeComment(id);
  }

  return (
  <div>
    <p>{commentBody}</p>
    <button onClick={handleRemove}>X</button>
  </div>);
}

export default CommentDetails;