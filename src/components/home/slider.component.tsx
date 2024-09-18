import React from "react";
import { SliderBg } from "../../assets/static/images";
import Movie from "./movie.components";
function Slider() {
  const movies = [];
  let i = 1;
  while (i < 10) {
    movies.push(<Movie key={i} />);
    i++;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${SliderBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="slider movie-items">
        <div className="container">
          <div className="row">
            <div className="social-link">
              <p>Follow us:</p>
              <a href="#">
                <i className="ion-social-facebook" />
              </a>
              <a href="#">
                <i className="ion-social-twitter" />
              </a>
              <a href="#">
                <i className="ion-social-googleplus" />
              </a>
              <a href="#">
                <i className="ion-social-youtube" />
              </a>
            </div>
            <div className="slick-multiItemSlider">{movies}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
