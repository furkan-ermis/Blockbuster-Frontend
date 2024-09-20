import { Genre, Movie as MovieModel } from "models/movie.model";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../assets/css/Slider.css";
import {
  getGenres,
  getMoviesPopuler,
  imageBasePath,
} from "../../services/movie.service";

interface State {
  movies: MovieModel[];
  genres: Genre[];
}

const MovieSlider: React.FC = () => {
  const [state, setState] = useState<State>({ movies: [], genres: [] });
  const colors = ["blue", "red", "green", "yellow", "purple"];

  const loadDataAsync = async () => {
    try {
      const [moviesResponse, genresResponse] = await Promise.all([
        getMoviesPopuler(12),
        getGenres(),
      ]);
      setState({ movies: moviesResponse, genres: genresResponse });
      console.log("Movies:", moviesResponse);
      console.log("Genres:", genresResponse);
    } catch (error) {
      console.error("Veri yüklenirken hata:", error);
    }
  };

  useEffect(() => {
    loadDataAsync();
  }, []);

  const getGenreName = (genreId: number): string => {
    const genre = state.genres.find((g) => g.id === genreId);
    return genre ? genre.name : "Unknown"; // Genre ismini bulamazsak 'Unknown' yaz
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {state.movies.map((movie) => (
          <div key={movie.id} className="movie-slide">
            <div
              className="movie-card"
              onClick={() => (window.location.href = `/movies/${movie.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${imageBasePath}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="cate movie-info">
                {movie.genre_ids.slice(0, 2).map((genreId) => (
                  <span
                    className="movie-category"
                    style={{
                      backgroundColor:
                        colors[Math.floor(Math.random() * colors.length)],
                      color: "white",
                    }}
                    key={genreId}
                  >
                    <span>{getGenreName(genreId)}</span>{" "}
                  </span>
                ))}
                <h6 className="movie-title">{movie.title}</h6>
                <p className="movie-rating">
                  <i className="ion-android-star" />
                  <span>{movie.vote_average.toFixed(1)}</span>/10
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
