import React from "react";
import Header from "../Header/Header";

function HomePage(){
    return(
        <div className = "home-page-container">
            <Header/>
            <div className = "homepage-about-section">
                <h2 className = "homepage-about-title">Welcome Intergalactic  travelers!</h2>
                <p className = "homepage-about-text">This is a fan page dedicated to one of the most intelligent  and funny adult cartoons on the  market today. Make your own Rick and Morty meme or play some trivia in the games section of the site. Find out which Rick and Morty character you are and more in the Quiz section. You can even check out the lists of episodes and characters to learn more about them. Indulge in your love of Rick and Morty and let you inner fan out to play. </p>
            </div>
        </div>
    )
}
export default HomePage;