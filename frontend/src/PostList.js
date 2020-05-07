import React from "react";
import PostCard from "./PostCard";
import { useSelector, shallowEqual } from "react-redux";

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
    <div>
      PostList
      {Object.keys(titleIdToTitle).length > 0 ? renderTitleListHTML() : <p>No Posts</p>}
    </div>
  );

}

export default PostList;
