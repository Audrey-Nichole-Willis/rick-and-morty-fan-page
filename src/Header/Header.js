import React from "react";
import Nav from "./Nav/Nav";
import "./Header.scss";

function Header(){
    return(
        <div className="header-container">
            <Nav/>
            <h1 className="header-title">Rick and Morty</h1>
        </div>
    )
}
export default Header;