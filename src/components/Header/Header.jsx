import { Container } from 'pages/Command.styled';
import { StyledLink, List, PageHeader } from './styled';

const Header = () => {
  return (
    <PageHeader>
      <Container>
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
      </Container>
    </PageHeader>
  );
};

export default Header;
