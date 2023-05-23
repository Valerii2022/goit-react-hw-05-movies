import { StyledLink, List } from './styled';

const Navigate = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </List>
    </nav>
  );
};

export default Navigate;
