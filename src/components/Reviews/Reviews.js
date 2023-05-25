import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/theMovieDB-API';
import { Title, List, ListItem, Container } from './styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieReviews(movieId);
        if (data.results.length !== 0) setMovieDetails(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <Container>
      {movieDetails ? (
        <List>
          {movieDetails.map(review => {
            return (
              <ListItem key={review.id}>
                <Title>Author: {review.author}</Title>
                <p>{review.content}</p>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Title>We don't have any reviews for this movie.</Title>
      )}
    </Container>
  );
};
export default Reviews;
