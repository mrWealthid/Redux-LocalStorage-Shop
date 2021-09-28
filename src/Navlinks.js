import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div>
      <Link className="links" to="/">
        Home
      </Link>
      <Link to="/About/wealth/football">About</Link>
    </div>
  );
};

export default Navlinks;
