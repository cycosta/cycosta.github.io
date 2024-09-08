import './index.scss';

import { Header, Main } from './components';
import { Contact, Featured, Intro, Projects, Work } from './views';

function App() {
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
