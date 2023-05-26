import { StyledLink, List, PageHeader } from './styled';

const Header = () => {
  return (
    <PageHeader>
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
    </PageHeader>
  );
};

export default Header;
