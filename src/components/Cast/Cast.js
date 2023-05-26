import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/theMovieDB-API';
import { Container, List, ListItem, Title, NameInfoWrapper } from './styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieCredits(movieId);
        if (data.cast.length !== 0) return setMovieDetails(data.cast);
        setMovieDetails(null);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <Container>
      {movieDetails ? (
        <List>
          {movieDetails.map(cast => {
            return (
              <ListItem key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg`
                  }
                  alt={cast.name}
                  width="80"
                  height="120"
                />
                <NameInfoWrapper>
                  <Title>
                    Name: <span>{cast.name}</span>
                  </Title>

                  <Title>
                    Character: <span>{cast.character}</span>
                  </Title>
                </NameInfoWrapper>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Title>Sorry! No cast for this movie...</Title>
      )}
    </Container>
  );
};

export default Cast;
