import React, { useEffect, useState } from "react";
import "../../assets/css/Slider.css";
import { SliderBg } from "../../assets/static/images";
import { Movie as MovieModel } from "../../models/movie.model"; // Movie modeli
import { getMoviesPopuler } from "../../services/movie.service";
import MovieSlider from "./movie.components"; // Yeni slider bileşenini içe aktarıyoruz
function Slider() {
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
            <div className="">
              {/* Yeni Slider Bileşeni Buraya Ekleniyor */}
              <MovieSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
