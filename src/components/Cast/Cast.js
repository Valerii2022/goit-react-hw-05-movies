import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/theMovieDB-API';

const Cast = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieCredits(movieId);
        setMovieDetails(data.cast);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieDetails &&
          movieDetails.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  alt={cast.name}
                  width="80"
                />
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
