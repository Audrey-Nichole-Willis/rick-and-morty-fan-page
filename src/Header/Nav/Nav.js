import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <div className = "nav-container">
            <Link to = "/home-page">Home</Link>
            <Link to = "#">Characters</Link>
            <Link to = "#">Episodes</Link>
            <Link to = "#">Games</Link>
            <Link to = "#">Quizzes</Link>
            <Link to = "#">Blog</Link>
            <Link to = "#">Contact</Link>
        </div>
    )
}
export default Nav;