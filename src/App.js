import { useState } from 'react';

import Fold from './components/Fold'
import Projects from './components/Projects';
import Contact from './components/Contact';

import Navbar from './components/Navbar';

import styles from './App.module.css'


function App() {

  const [closeNav, toggleCloseNav] = useState(false)
  window.addEventListener('scroll', () => toggleCloseNav(!closeNav))

  return (
    <>
      <header>
          <Navbar closeNav={closeNav}/>
      </header>
      <main className={styles.main}>

          <Fold />

          <Projects />

          <Contact />
      </main>
    </>
  );
}

export default App;
