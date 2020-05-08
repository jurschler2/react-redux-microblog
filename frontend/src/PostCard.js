import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";


/** 
 *  PostCard: Presentational component that displays link to postDetails page
 *    - Parent: PostList
 * */
function PostCard({ handleVote, id, title, description, votes }) {


  const handleVoteClick = evt => {
    evt.preventDefault();
    const {name} = evt.target;
    handleVote(id, name);
  }

  return (
    <div className="postcard">
      <Link to={`/${id}`} className="postcard-link">
        <h3 className="postcard-title">{title}</h3>
      </Link>
      <h4 className="postcard-description"><i>{description}</i></h4>
      <span><h5>Votes: {votes}</h5>
      <button name="up" onClick={handleVoteClick}>Upvote</button>
      <button name="down" onClick={handleVoteClick}>Downvote</button>
      </span>
    </div>
  );

}

export default PostCard;