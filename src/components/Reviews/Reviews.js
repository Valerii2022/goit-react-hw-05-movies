import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>Reviews</div>;
};
export default Reviews;
