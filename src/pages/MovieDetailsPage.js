import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/theMovieDB-API';
import { StyledLink, ListItem, List, BlockWrapper } from './Command.styled';
import {
  MovieInfoWrap,
  AboutMovieWrap,
  GenresList,
  BackLink,
  BackLinkArrow,
} from './MovieDetails.styled';

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
          <BlockWrapper>
            <BackLink to={backLinkLocationRef.current}>
              <BackLinkArrow width="20" height="20" />
              Go back
            </BackLink>
            <MovieInfoWrap>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                    : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg`
                }
                alt={movieDetails.title}
                width="300"
              />
              <AboutMovieWrap>
                <h1>
                  {movieDetails.title}({movieDetails.release_date.slice(0, 4)})
                </h1>
                <p>User Score {Math.round(movieDetails.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <GenresList>
                  {movieDetails.genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
                </GenresList>
              </AboutMovieWrap>
            </MovieInfoWrap>
          </BlockWrapper>
          <BlockWrapper>
            <h3>Additional information</h3>
            <List>
              <ListItem>
                <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={`/movies/${movieId}/reviews`}>
                  Reviews
                </StyledLink>
              </ListItem>
            </List>
          </BlockWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
