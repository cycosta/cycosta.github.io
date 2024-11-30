import ReactGA from 'react-ga4';

import './index.scss';

import { AppProvider } from './context';
import { Header, Main } from './components';
import { Contact, Featured, Intro, Code, Experience } from './views';

function App() {
  ReactGA.initialize('G-DWTP6J7WXM');

  return (
    <AppProvider>
      <Header />
      <Main>
        <Intro />
        <Experience />
        <Code />
        <Featured />
        <Contact />
      </Main>
    </AppProvider>
  );
}

export default App;
