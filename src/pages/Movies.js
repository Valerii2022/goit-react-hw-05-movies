import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/theMovieDB-API';
import { Container, List, StyledLink, ListItem } from './Command.styled';
import { Input, SearchBtn } from './Movies.styled';

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
    <Container>
      <Input value={queryName} onChange={updateQueryName} type="text" />
      <SearchBtn type="button" onClick={findMoviesByQuery}>
        Search
      </SearchBtn>
      <List>
        {searchMovies &&
          searchMovies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <StyledLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </StyledLink>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
};

export default Movies;
