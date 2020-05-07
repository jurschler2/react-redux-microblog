import React from "react";
import PostCard from "./PostCard";
import { useSelector, shallowEqual } from "react-redux";

/** 
 *  PostList: Component that calls state of all posts
 *    - Parent: Home
 * */
function PostList() {

  // To add a useSelector to get all posts
  const posts = useSelector(store => store.posts, shallowEqual)

  let postListHTML = Object.keys(posts).map(key => (
    <PostCard
      key={posts[key].id}
      id={posts[key].id}
      title={posts[key].title}
      description={posts[key].description} />
  ))

  return (
    <div>
      PostList
      {postListHTML}
    </div>
  );

}

export default PostList;
