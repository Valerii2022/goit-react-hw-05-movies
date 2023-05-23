import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navigate from './Navigate/Navigate';
import Home from 'pages/Home';

const Header = styled.header`
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 3px 8px #0070ba;
`;

const App = () => {
  return (
    <div>
      <Header>
        <Navigate />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieID</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
