import './index.scss';

import { Header, Main } from './components';
import { Contact, Featured, Intro, Projects, Work } from './views';
import { useState } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState<string>('#intro');

  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
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
