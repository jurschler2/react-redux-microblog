import React, {useState} from "react";
import {useParams, Redirect} from "react-router-dom";
import EditPostDetails from "./EditPostDetails";
import CommentList from "./CommentList";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {deletePost, updatePost} from "./actions";

/** 
 *  PostDetails: Component that calls state of specific post
 *    - Parent: Routes
 * */
function PostDetails() {

  const {postId} = useParams();

  const dispatch = useDispatch();

  // To add a useSelector to get specific post
  const post = useSelector(store => store.posts[postId], shallowEqual)
  
  // const postToDisplay = posts.filter(p => p.id === postId)[0];
  const [showEditForm, setShowEditForm] = useState(false);

  if (!post) {
    return (
      <Redirect to="/"/>
    );
  }

  const handleClick = evt => {
    evt.preventDefault();
    setShowEditForm(true)
  }

  const handleDeletePost = () => {
    dispatch(deletePost(postId));
  }

  const handleUpdatePost = (formData) => {
    dispatch(updatePost(formData));
  }

  const renderPostDetails = () => {
    return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.body}</p>
      <button className="edit-post-btn" onClick={handleClick}>Edit</button>
      <button className="delete-post-btn" onClick={handleDeletePost}>Delete</button>
      <div>
        <CommentList postId={postId}/>
      </div>
    </div>
    );
  }

  return (
  <div>
    {showEditForm 
      ? <EditPostDetails currentPost={post} handleUpdatePost={handleUpdatePost} setShowEditForm={setShowEditForm}/>
      : renderPostDetails()
    }
  </div>
  );

}

export default PostDetails;