import React from "react";
import PostList from "./PostList";

function Home({posts}) {


  // To remove the posts prop as redux will handle the posts inside of PostList.
  return (
  <div>
    Home
  <PostList posts={posts}/>
  </div>
    );

}

export default Home;