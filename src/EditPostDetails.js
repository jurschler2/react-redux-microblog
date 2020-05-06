import React, {useState} from "react";
import {useHistory} from "react-router-dom";


function EditPostDetails({currentPost, addEditPost, setShowEditForm}) {

  const INITIAL_STATE = currentPost;
  const [formData, setFormData] = useState({...INITIAL_STATE})
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }
  // To add a dispatch into the submission.
  const handleSubmit = evt => {
    evt.preventDefault();
    const {name} = evt.target;
    if (name === "save") {
      addEditPost(formData);
      setShowEditForm(false);
      history.push(`/${currentPost.id}`);
    } else {
      setShowEditForm(false);
      history.push(`/${currentPost.id}`);
    }
  }

  return (
    <div>
      <h1>Edit Post</h1>
        <form>
          <label htmlFor="title">Title:</label>
          <input 
            name="title"
            onChange={handleChange}
            value={formData.title}/>
          <br/>  
          <label htmlFor="description">Description:</label>
          <input 
            name="description"
            onChange={handleChange}
            value={formData.description}/>
          <br/>  
          <label htmlFor="body">Body:</label>
          <input 
            name="body"
            type="textarea"
            onChange={handleChange}
            value={formData.body}/>
          <br/>  
          <button name="save" onClick={handleSubmit}>Save</button>
          <button name="cancel" onClick={handleSubmit}>Cancel</button>
        </form>
    </div>
    );

}

export default EditPostDetails;