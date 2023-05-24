import { useEffect, useState, useRef } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/theMovieDB-API';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
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

  return (
    <>
      {movieDetails && (
        <div>
          <div>
            <Link to={backLinkLocationRef.current}>Go back</Link>
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width="300"
            />
            <h1>
              {movieDetails.title}({movieDetails.release_date.slice(0, 4)})
            </h1>
            <p>User Score {Math.round(movieDetails.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movieDetails.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
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
