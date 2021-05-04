import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
          <img src="https://i.ibb.co/jvG4LQy/Star-Wars-Rebel-Alliance-Ships-Vinyl-Decal-Car.jpg" />
        <div>Main</div>
      </Link>
      <Link to="/battle">
        <img src="https://i.ibb.co/SQrpg5c/duel.png" /><div>Fight!</div>
      </Link>
      <Link to="/people">
      <img src="https://i.ibb.co/5F4ntKf/pngwing-com-6.png" /> <div>Index</div>
      </Link>
     
    </div>
  );
};

export default Nav;