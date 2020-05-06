import React from "react";
import {NavLink} from "react-router-dom";

// Renders a navbox with links to the home page and to the new post form.
function NavBox() {

  return (
  <nav className="navbox">
    <h1>Microblog</h1>
    <h4>Get into the Rithm of blogging!</h4>
    <NavLink exact to="/">Blog</NavLink>
    <NavLink exact to="/new">Add a new post</NavLink>
  </nav>);

}

export default NavBox;