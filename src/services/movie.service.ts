import { getMovieById } from "./movies";
export const imageBasePath = "https://image.tmdb.org/t/p/w250/" ;

export const fetchMovieDetails = async (movieId: number) => {
  return getMovieById(movieId);
};
