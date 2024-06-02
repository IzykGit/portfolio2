import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { motion, transform } from 'framer-motion';

import styles from '../styles/Navbar.module.css';

const Navbar = ({ closeNav }) => {

    const [closed, toggle] = useState(true)

    useEffect(() => {
        if(!closed) {
            toggle(closeNav)
        }
    }, [closeNav])

    const variants = {
        open: { width: '100%', height: '100vh', transition: { duration: 0.3 }  },
        closed: { width: '100%', height: '0', transition: { duration: 0.3 } }
    }

    const hamburgerVariants = {
        ham_1: { transform: `rotateZ(${45}deg) translateY(${0.6}rem) translateX(${0.35}rem)` },
        ham_2: { width: '0rem' },
        ham_3: { transform: `rotateZ(${-45}deg) translateY(${-0.5}rem) translateX(${0.25}rem)`, },

        openSpin: { transform: `rotate(${180}deg`, transition: { duration: 0.5 }},
        closeSpin: { transform: `rotate(${0}deg`, transition: { duration: 0.3 }}
    }

    return (
        <>
            <motion.div variants={hamburgerVariants} animate={closed ? "closeSpin" : "openSpin" } className={
                closed ? styles.hamburger_menu : styles.hamburger_menu_open}
                onClick={() => toggle(!closed)}>

                <button className={styles.burger_button}></button>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_1"}></motion.div>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_2"}></motion.div>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_3"}></motion.div>


            </motion.div>
            <motion.nav variants={variants} animate={ closed ? "closed" : "open" } className={styles.nav}>

                <div className={closed ? styles.close_list : styles.navbar}>
                    <a href='/' onClick={() => toggle(!closed)}>Contact Me</a>
                    <a rel="noopener noreferrer" target='_blank' href='/Resume.pdf' aria-label='Resume' onClick={() => toggle(!closed)}>Resume</a>
                    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/lance-hemphill-250b85218/' aria-label='LinkedIn' onClick={() => toggle(!closed)}>LinkedIn</a>
                    <a rel='noopener noreferrer' target='_blank' href='https://github.com/IzykGit' aria-label='Github'>Github</a>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
