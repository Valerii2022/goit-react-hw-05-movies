import Notiflix from 'notiflix';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/theMovieDB-API';
import { Container, List, StyledLink, ListItem } from './Command.styled';
import { Input, SearchBtn } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);
  const [currentQuery, setCurrentQuery] = useState(queryName);

  console.log(searchMovies);

  const updateQueryName = evt => {
    setCurrentQuery(evt.target.value);
  };

  const findMoviesByQuery = async () => {
    setSearchParams({ query: currentQuery });
    try {
      const { data } = await fetchMovieSearch(currentQuery);
      if (data.results.length === 0) {
        Notiflix.Notify.failure(
          'There are no movies matching you search query. Please try again.'
        );
      } else {
        setSearchMovies(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Input value={currentQuery} onChange={updateQueryName} type="text" />
      <SearchBtn type="submit" onClick={findMoviesByQuery}>
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
