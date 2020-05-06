import React from "react";
import PostCard from "./PostCard";


function PostList({posts}) {

  // To add a useSelector to get all posts
  // const theseAreAllPosts = useSelector(store => store.posts, shallowEqual)

  let postListHTML = posts.map(p => (<PostCard key={p.id} 
                                               id={p.id} 
                                               title={p.title} 
                                               description={p.description}/>))


  return (
  <div>
    PostList
    {postListHTML}
  </div>
  );

}

export default PostList;