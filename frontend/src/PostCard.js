import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";


/** 
 *  PostCard: Presentational component that displays link to postDetails page
 *    - Parent: PostList
 * */
function PostCard({ id, title, description, votes }) {

  return (
    <div className="postcard">
      <Link to={`/${id}`} className="postcard-link">
        <h3 className="postcard-title">{title}</h3>
      </Link>
      <h4 className="postcard-description"><i>{description}</i></h4>
      <h5>Votes: {votes}</h5>
    </div>
  );

}

export default PostCard;