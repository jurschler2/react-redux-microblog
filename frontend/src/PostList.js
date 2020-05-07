import React from "react";
import PostCard from "./PostCard";
import { useSelector, shallowEqual } from "react-redux";

/** 
 *  PostList: Component that calls state of all titles
 *    - Parent: Home
 * */
function PostList() {

  // To add a useSelector to get all posts
  const titles = useSelector(store => store.titles, shallowEqual)
  

  const renderTitleListHTML = () => {
    return Object.keys(titles).map(key => (
    <PostCard
      key={titles[key].id}
      id={titles[key].id}
      title={titles[key].title}
      description={titles[key].description}
      votes={titles[key].votes} />
  ))}

  return (
    <div>
      PostList
      {Object.keys(titles).length > 0 ? renderTitleListHTML() : <p>LOADING</p>}
    </div>
  );

}

export default PostList;
