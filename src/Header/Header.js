import React from "react";
import Nav from "./Nav/Nav";
import "./Header.scss";

function Header(){
    return (
      <div className="header-container">
        <Nav />
        <div className="header-img-and-title">
          <h1 className="header-title">Rick and Morty Fan Page</h1>
        </div>
      </div>
    );
}
export default Header;