import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Main</div>
      </Link>
      <Link to="/people">
        <div>Index</div>
      </Link>
      <Link to="/battle">
        <div>Fight!</div>
      </Link>
    </div>
  );
};

export default Nav;