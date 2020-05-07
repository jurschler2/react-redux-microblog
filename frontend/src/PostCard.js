import React from "react";
import { Link } from "react-router-dom";


/** 
 *  PostCard: Presentational component that displays link to postDetails page
 *    - Parent: PostList
 * */
function PostCard({ id, title, description, votes }) {

  return (
    <div className="postcard">
      <Link to={`/${id}`}><h3>{title}</h3></Link>
      <h4><i>{description}</i></h4>
      <h5>{votes}</h5>
    </div>
  );

}

export default PostCard;