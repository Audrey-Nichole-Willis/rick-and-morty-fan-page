import React from "react";
import "./OpeningPage.scss";

function OpeningPage(){
    return (
      <div className="opening-page-container">
        <div className="opening page-content">
          <div className="opening-page-header-container animate__animated animate__lightSpeedInLeft">
            <h1 className="opening-page-header animate__animated animate__wobble animate__delay-2s">
              Rick And Morty Fan Page
            </h1>
          </div>
          <button className="opening-page-button animate__animated animate__fadeInDown animate__delay-3s">
            Start your adventure here!
          </button>
        </div>
      </div>
    );
}
export default OpeningPage;