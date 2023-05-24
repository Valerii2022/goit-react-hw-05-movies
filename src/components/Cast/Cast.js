import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>Cast</div>;
};

export default Cast;
