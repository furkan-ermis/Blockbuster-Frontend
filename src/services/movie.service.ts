import axios from 'axios';
import { getGenreList, getMovieById, getPopularMovies } from './movies';

export const imageBasePath = "https://image.tmdb.org/t/p/original/";

export const getMovieDetails = async (movieId: number) => {
  return getMovieById(movieId);
};

export const getMoviesPopuler = async (count: number) => {
  return getPopularMovies(count);
};


export const getGenres = async () => {
  return getGenreList();
};


