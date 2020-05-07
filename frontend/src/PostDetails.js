import React, {useState, useEffect} from "react";
import {useParams, Redirect} from "react-router-dom";
import EditPostDetails from "./EditPostDetails";
import CommentList from "./CommentList";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {deletePost, updatePost, getSinglePostFromAPI} from "./actions";

/** 
 *  PostDetails: Component that calls state of specific post
 *    - Parent: Routes
 * */
function PostDetails() {

  const {postId} = useParams();

  const dispatch = useDispatch();

  useEffect(
    function LoadSinglePostFromAPI() {
      dispatch(getSinglePostFromAPI(postId));
    }, [dispatch]);

  // To add a useSelector to get specific post
  const post = useSelector(store => store.posts[postId], shallowEqual)
  const error = useSelector(store => store.errors.postDetailError, shallowEqual)
  
  // const postToDisplay = posts.filter(p => p.id === postId)[0];
  const [showEditForm, setShowEditForm] = useState(false);

  if (error && !post) {
    
    return (
      <div><h1>There was a problem loading this webpage, please try again later.</h1></div>
      // <Redirect to="/"/>
    );
  }

  // To revisit later:

  // } else if (!post) {
  //   return (
  //   <Redirect to="/"/>
  //   );
  // }


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
      : (post ? renderPostDetails() : <p>LOADING</p>)
    }
  </div>
  );

}

export default PostDetails;