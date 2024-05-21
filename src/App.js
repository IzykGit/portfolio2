import './App.css';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Fold from './components/Fold';
import About from './components/About';

function App() {

  const [closeNav, toggleCloseNav] = useState(false)


  window.addEventListener('scroll', () => toggleCloseNav(!closeNav))

  return (
    <>
      <header>
        <Navbar closeNav={closeNav}/>
      </header>
      <main onClick={() => toggleCloseNav(!closeNav)} >


        <Fold />

        <About />

      </main>
    </>
  );
}

export default App;
