import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/theMovieDB-API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  console.log(movieDetails);

  return (
    <>
      {movieDetails && (
        <div>
          <img src={movieDetails.poster_path} alt={movieDetails.title} />
          <h1>
            {movieDetails.title}({movieDetails.release_date})
          </h1>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};
export default MovieDetails;
