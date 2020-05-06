import React, {useState} from "react";
import CommentDetails from "./CommentDetails";
import NewCommentForm from "./NewCommentForm";

function CommentList() {

  const [comments, setComments] = useState([]);

  const addComment = newComment => {
    setComments([...comments, newComment])
  }

  const removeComment = commentId => {
    let filteredComments = comments.filter(c => c.id !== commentId)
    setComments([...filteredComments])
  }

  const renderComments = () => {

    return (comments.map(c=> <CommentDetails key={c.id} 
                                             id={c.id} 
                                             commentBody={c.commentBody} 
                                             removeComment={removeComment}/>))

  }

  return (
  <div>
   <b>Comments</b>
    <div>
      {renderComments()}
    </div>
    <div>
      <NewCommentForm addComment={addComment}/>
    </div>
  </div>);
}

export default CommentList;