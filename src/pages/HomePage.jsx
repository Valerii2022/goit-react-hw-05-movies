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
                <img
                  width={'100px'}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg`
                  }
                  alt={movie.title}
                />
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
};

export default Home;
