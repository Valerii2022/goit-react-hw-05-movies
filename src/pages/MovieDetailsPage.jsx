import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation, Navigate } from 'react-router-dom';
import { fetchMovieDetails } from 'services/theMovieDB-API';
import {
  StyledLink,
  ListItem,
  List,
  BlockWrapper,
  Container,
  Image,
  Title,
  ImgWrap,
} from './Command.styled';
import {
  MovieInfoWrap,
  AboutMovieWrap,
  GenresList,
  BackLink,
  BackLinkArrow,
  Text,
  Subtitle,
  GenresItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && <Navigate to="/movies" />}
      {movieDetails && (
        <Container>
          <BlockWrapper>
            <BackLink to={backLinkLocationRef.current}>
              <BackLinkArrow width="20" height="20" />
              Go back
            </BackLink>
            <MovieInfoWrap>
              <ImgWrap>
                <Image
                  src={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                      : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg`
                  }
                  alt={movieDetails.title}
                  width="300"
                />
              </ImgWrap>
              <AboutMovieWrap>
                <Title>
                  {movieDetails.title}({movieDetails.release_date.slice(0, 4)})
                </Title>
                <Text>
                  User Score {Math.round(movieDetails.vote_average * 10)}%
                </Text>
                <Subtitle>Overview</Subtitle>
                <Text>{movieDetails.overview}</Text>
                <Subtitle>Genres</Subtitle>
                <GenresList>
                  {movieDetails.genres.map(genre => {
                    return <GenresItem key={genre.id}>{genre.name}</GenresItem>;
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
          <Suspense
            fallback={
              <Container>
                <div>Loading...</div>
              </Container>
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      )}
    </>
  );
};
export default MovieDetails;
