import React from "react";
import PostCard from "./PostCard";
import { useSelector, shallowEqual } from "react-redux";
import "./PostList.css";

/** 
 *  PostList: Component that calls state of all titles
 *    - Parent: Home
 * */
function PostList() {
  const titleIdToTitle = useSelector(store => store.titles, shallowEqual)
  // const titles = useSelector(store => Object.values(store.titles), shallowEqual)  

  const renderTitleListHTML = () => {
    // ********* map over Object.values 
    return Object.keys(titleIdToTitle).map(key => (
      <PostCard
        key={titleIdToTitle[key].id}
        id={titleIdToTitle[key].id}
        title={titleIdToTitle[key].title}
        description={titleIdToTitle[key].description}
        votes={titleIdToTitle[key].votes} />
    ))
  }

  return (
    <div className="posts-list">
      <div className="posts-tagline">
        Welcome to <strong>Microblog</strong>, our innovative site for communicating on the information superhighway
      </div>
      <div className="posts">
        {Object.keys(titleIdToTitle).length > 0 ? renderTitleListHTML() : <p>No Posts</p>}
      </div>
    </div>
  );

}

export default PostList;
