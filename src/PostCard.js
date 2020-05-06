import React from "react";
import {Link} from "react-router-dom";


function PostCard({id, title, description}) {

  return (
  
    <div className="postcard">
      <Link to={`/${id}`}><h3>{title}</h3></Link>
      <h4><i>{description}</i></h4>
    </div>
  
    );

}

export default PostCard;