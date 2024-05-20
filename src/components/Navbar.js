import React, { useState } from 'react';
import { motion, transform } from 'framer-motion';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {

    const [closed, toggle] = useState(true)

    const variants = {
        open: { width: '30rem', height: '60vh' },
        closed: { width: '5rem', height: '4.5rem' }
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

                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_1"}></motion.div>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_2"}></motion.div>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_3"}></motion.div>
            </motion.div>
            <motion.nav variants={variants} animate={ closed ? "closed" : "open" } className={styles.nav}>

                <div className={closed ? styles.close_list : styles.navbar}>
                    <a href='/'>About</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Resume</a>
                    <a href='/'>LinkedIn</a>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
