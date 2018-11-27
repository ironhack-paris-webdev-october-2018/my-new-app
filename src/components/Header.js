import React from "react";

import "./Header.css";
import logo from "../logo.svg";

// Components can be written as functions if they don't have state
function Header() {
  return (
    <header>
      <h1>My New App</h1>
      <img src={logo} alt="React logo" />
    </header>
  );
}

export default Header;
