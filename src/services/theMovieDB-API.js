import axios from 'axios';

export const fetchTrendingMovies = async () => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=40e15dc62f9875135cfe2bf57a204366'
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieDetails = async id => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=40e15dc62f9875135cfe2bf57a204366`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};
