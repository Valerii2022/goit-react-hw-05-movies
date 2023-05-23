import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/About" element={<div>About</div>} />
        <Route path="/Images" element={<div>Images</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
