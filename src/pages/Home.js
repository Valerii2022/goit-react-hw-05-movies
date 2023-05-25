import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/theMovieDB-API';
import { Container, List, StyledLink, ListItem } from './Command.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

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
    <Container>
      <h1>Trending today</h1>
      <List>
        {trendingMovies &&
          trendingMovies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <StyledLink to={`/movies/${movie.id}`}>
                  {movie.title}
                </StyledLink>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
};

export default Home;
