import React, {useState} from "react";
import {v4 as uuid} from "uuid";

/** 
 *  NewCommentForm: Component that takes in handleAddComment that will call action to add comment
 *   - Parent: CommentList
 * */
function NewCommentForm({handleAddComment}) {
  const INITIAL_STATE = {commentBody: ""}
  const [formData, setFormData] = useState({...INITIAL_STATE})

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    let newComment = {...formData, id:uuid()};
    handleAddComment(newComment);
    setFormData({...INITIAL_STATE});
  }

  return (
  <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="commentBody"
          placeholder="New Comment"
          onChange={handleChange}
          value={formData.commentBody}/>
        <button name="add">Add</button>
      </form>
  </div>);

}

export default NewCommentForm;