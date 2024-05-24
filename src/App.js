import { useState, useEffect } from 'react';

import Fold from './components/Fold'

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
      <main onClick={() => toggleCloseNav(!closeNav)} className={styles.main}>

      <Fold />

      </main>
    </>
  );
}

export default App;
