import React, {useState} from "react";
import {useParams, Redirect} from "react-router-dom";
import EditPostDetails from "./EditPostDetails";
import CommentList from "./CommentList"


function PostDetails({posts, addEditPost}) {

  const {postId} = useParams();

  // To add a useSelector to get specific post
  // const thisIsOurPost = useSelector(store => store.posts.postId, shallowEqual)

  // To add a useSelector to get comments
  // const theseAreOurComments = useSelector(store => store.comments.postId, shallowEqual)
  
  const postToDisplay = posts.filter(p => p.id === postId)[0];
  const [showEditForm, setShowEditForm] = useState(false);

  if (!postToDisplay) {
    return (
      <Redirect to="/"/>
    );
  }


  const handleClick = evt => {
    evt.preventDefault();
    setShowEditForm(true)
  }



  const renderPostDetails = () => {
    return (
    <div>
      <h1>{postToDisplay.title}</h1>
      <p>{postToDisplay.description}</p>
      <p>{postToDisplay.body}</p>
      <button className="edit-post-btn" onClick={handleClick}>Edit</button>
      <div>
        <CommentList />
      </div>
    </div>
    );
  }

  return (
  <div>
    {showEditForm 
      ? <EditPostDetails currentPost={postToDisplay} addEditPost={addEditPost} setShowEditForm={setShowEditForm}/>
      : renderPostDetails()
    }
  </div>
  );

}

export default PostDetails;