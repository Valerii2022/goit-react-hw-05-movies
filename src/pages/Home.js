import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/theMovieDB-API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies &&
          trendingMovies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
