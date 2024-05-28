import { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { motion } from 'framer-motion';


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
      <AnimatedCursor 
          innerSize={8}
          outerSize={0}
          color='0, 0, 0'
          outerAlpha={0.2}
          innerScale={1.5}
          outerScale={6} 
          trailingSpeed={20}
          innerStyle={{
            borderRadius: 0
            
          }}
          outerStyle={{
            borderRadius: 0
          }}
      />
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
