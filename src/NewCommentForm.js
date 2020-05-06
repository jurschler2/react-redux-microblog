import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function NewCommentForm({addComment}) {
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
    let newComment = {...formData, id:uuid()}
    addComment(newComment)
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