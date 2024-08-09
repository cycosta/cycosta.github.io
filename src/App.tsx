import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';

import { Soon } from './components/Soon';
import { Home } from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Soon />} />
        <Route path="/site" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
