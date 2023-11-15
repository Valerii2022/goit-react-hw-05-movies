import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/theMovieDB-API';
import {
  Container,
  List,
  ListItem,
  Image,
  Title,
  Button,
} from './Command.styled';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(498);
  const [hideBtn, setHideBtn] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchTrendingMovies();
        setTrendingMovies(data.results);
        setHideBtn(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleLoadMoreBtnClick = async () => {
    try {
      const { data } = await fetchTrendingMovies(page);
      setTrendingMovies(prev => [...prev, ...data.results]);
      if (data.page >= 500) {
        setHideBtn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {trendingMovies &&
          trendingMovies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg`
                    }
                    alt={movie.title}
                  />
                </NavLink>
              </ListItem>
            );
          })}
      </List>
      {hideBtn ? (
        <Button
          className="hidden"
          onClick={() => {
            setPage(prev => prev + 1);
            handleLoadMoreBtnClick();
          }}
        >
          Load more
        </Button>
      ) : (
        <Button
          onClick={() => {
            setPage(prev => prev + 1);
            handleLoadMoreBtnClick();
          }}
        >
          Load more
        </Button>
      )}
    </Container>
  );
};

export default Home;
