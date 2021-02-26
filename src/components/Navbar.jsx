import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const navbarItem = props.foods
    .filter((item) => item.isLink)
    .map((item, index) => (
      <li key={index}>
        <Link to={item.link} className="nav-link text-light">
          {item.title}
        </Link>
      </li>
    ));
  return (
    <nav className="navbar container navbar-expand-sm navbar-light " style={{background: "#E7672E"}}>
      <Link to="/" className="navbar-brand text-light">

        <span className="ms-2">
          Food<span className="text-secondary">S</span>
        </span>
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ms-auto">{navbarItem}</div>
      </div>
    </nav>
  );
}

export default Navbar;
