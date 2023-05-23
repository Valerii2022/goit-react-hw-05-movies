import { StyledLink } from './styled';

const Navigate = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
