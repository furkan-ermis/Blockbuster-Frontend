import React from "react";
import { LogoMain } from "../../assets/static/images";
function Preload() {
  return (
    <>
      <div id="preloader">
        <img className="logo" src={LogoMain} alt="" width="119" height="58" />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Preload;
