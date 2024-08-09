import { Route, Routes } from 'react-router-dom';
import './index.scss';

import { Header } from './components';
import { Intro, Work, Projects, Featured, Contact } from './views';

export const Home = () => {
  return (
    <>
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
    </>
  );
};
