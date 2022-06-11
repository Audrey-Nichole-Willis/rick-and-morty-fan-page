import React from "react";
import "./OpeningPage.scss";

function OpeningPage(){
    return (
      <div className="opening-page-container">
        <h1 className="opening-page-header animate__animated animate__lightSpeedInLeft"> Rick and Morty</h1>
        <button className="opening-page-button">Start your adventure here! </button>
      </div>
    );
}
export default OpeningPage;