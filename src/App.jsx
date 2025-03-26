import { Routes, Route, useNavigate } from 'react-router';

import SeraPage from './components/SeraPage/SeraPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SeraPage />} />
      </Routes>
  );
};

export default App;
