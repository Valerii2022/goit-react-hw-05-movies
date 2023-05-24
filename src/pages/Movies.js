import { useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/theMovieDB-API';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState(null);

  const updateQueryName = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  const findMoviesByQuery = async () => {
    try {
      const { data } = await fetchMovieSearch(queryName);
      setSearchMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input value={queryName} onChange={updateQueryName} type="text" />
      <button type="button" onClick={findMoviesByQuery}>
        Search
      </button>
      <ul>
        {searchMovies &&
          searchMovies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
