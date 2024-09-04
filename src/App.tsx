import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.scss';

import { Header } from './components';
import { Contact, Featured, Intro, Projects, Work } from './views';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Work />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Featured />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
