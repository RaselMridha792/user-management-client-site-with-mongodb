import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/users">users</Link>
      <br />
      <Link to="/details">details</Link>
    </div>
  );
};

export default Navbar;
