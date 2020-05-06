import React, {useState} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Home from "./Home";
import PostDetails from "./PostDetails";


function Routes() {


  // To refactor and remove the state and add/edit functions due to the usage of React Redux
  const [posts, setPosts] = useState([]);

  const addPost = newPost => {
    setPosts([...posts, newPost])
  }
  const addEditPost = editedPost => {
    let filteredPosts = posts.filter(p => p.id !== editedPost.id)
    setPosts([...filteredPosts, editedPost])
  }


  return (
    <Switch>
      <Route exact path="/new">
        <NewPostForm addPost={addPost}/>
      </Route>
      <Route exact path="/">
        <Home posts={posts}/>
      </Route>
      <Route exact path="/:postId">
        <PostDetails posts={posts} addEditPost={addEditPost}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    );

}

export default Routes;