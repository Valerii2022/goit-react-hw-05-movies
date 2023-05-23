import { Route, Routes } from 'react-router-dom';
import Navigate from './Navigate/Navigate';
import Home from 'pages/Home';

const App = () => {
  return (
    <div>
      <header>
        <Navigate />
      </header>

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
