import React from "react";
import logo1 from "../../assets/images/logo1.png";
function Preload() {
  return (
    <>
      <div id="preloader">
        <img className="logo" src={logo1} alt="" width="119" height="58" />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Preload;
