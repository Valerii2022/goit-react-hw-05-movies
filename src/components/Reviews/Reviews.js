import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/theMovieDB-API';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieReviews(movieId);
        setMovieDetails(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <ul>
          {movieDetails.map(review => {
            return (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
