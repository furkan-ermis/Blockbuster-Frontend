import React from "react";
import slider1 from "../../assets/images/uploads/slider1.jpg";

// Props tipini tanımlayın
interface MovieProps {
  key: number;
}

// Movie bileşeni
const Movie: React.FC<MovieProps> = ({ key }) => {
  return (
    <div className="movie-item" key={key}>
      <div className="mv-img">
        <a href="#">
          <img src={slider1} alt="" width={265} height={437} />
        </a>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue">
            <a href="#">Sci-fi</a>
          </span>
        </div>
        <h6>
          <a href="#">Interstellar</a>
        </h6>
        <p>
          <i className="ion-android-star" />
          <span>7.4</span> /10
        </p>
      </div>
    </div>
  );
};

export default Movie;
