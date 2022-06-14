import React from "react";
import Nav from "./Nav/Nav";
import "./Header.scss";
import "./rick-and-morty-gd06010ed7_1920.jpg";

function Header(){
    return(
        <div className="header-container">
            <Nav/>
            <img src = {require("./rick-and-morty-gd06010ed7_1920.jpg")} alt = "rick and morty"/>
            <h1 className="header-title">Rick and Morty</h1>
        </div>
    )
}
export default Header;