import ReactGA from 'react-ga4';

import './index.scss';

import { Header, Main } from './components';
import { Contact, Featured, Intro, Projects, Work } from './views';

function App() {
  ReactGA.initialize('G-DWTP6J7WXM');

  return (
    <>
      <Header />
      <Main>
        <Intro />
        <Work />
        <Projects />
        <Featured />
        <Contact />
      </Main>
    </>
  );
}

export default App;
