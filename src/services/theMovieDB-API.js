import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '40e15dc62f9875135cfe2bf57a204366';

export const fetchTrendingMovies = async (page = 1) => {
  try {
    return await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieDetails = async id => {
  try {
    return await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieCredits = async id => {
  try {
    return await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieReviews = async id => {
  try {
    return await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieSearch = async query => {
  try {
    return await axios.get(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};
