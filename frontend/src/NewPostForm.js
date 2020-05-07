import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {addSinglePostFromAPI} from "./actions";
import {useDispatch} from "react-redux";

/** 
 *  NewPostForm: Component that calls dispatch to add new post
 *   - Parent: Route
 * */
function NewPostForm({}) {

  const INITIAL_STATE = {title: "", description: "", body: ""}
  const [formData, setFormData] = useState({...INITIAL_STATE})
  const history = useHistory();

  // Redux Dispatch
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  // To add a dispatch in the submission.
  const handleSubmit = evt => {
    evt.preventDefault();
    const {name} = evt.target;
    if (name === "save") {
      dispatch(addSinglePostFromAPI({...formData}));
      history.push("/");
    } else {
      history.push("/");
    }
  }

  return (
  <div>
    <h1>New Post</h1>
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
  </div>);
}

export default NewPostForm;