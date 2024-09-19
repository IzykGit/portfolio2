import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { hamburgerVariants } from '../data/MotionVariants';
import { navVariants } from '../data/MotionVariants';

import styles from '../styles/Navbar.module.css';

const Navbar = ({ closeNav }) => {

    const [closed, toggle] = useState(true)

    useEffect(() => {
        if(!closed) {
            toggle(closeNav)
        }
    }, [closeNav])

    return (
        <>
            <motion.div variants={hamburgerVariants} animate={closed ? "closeSpin" : "openSpin" } className={
                closed ? styles.hamburger_menu : styles.hamburger_menu_open}
                onClick={() => toggle(!closed)}>

                <button className={styles.burger_button} aria-label='Navigation Button' type='button'></button>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_1"}></motion.div>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_2"}></motion.div>
                <motion.div variants={hamburgerVariants} animate={closed ? "" : "ham_3"}></motion.div>


            </motion.div>
            <motion.nav variants={navVariants} animate={ closed ? "closed" : "open" } className={styles.nav}>

                <div className={closed ? styles.close_list : styles.navbar}>
                    <a rel="noopener noreferrer" target='_blank' href='/Lance Hemphill.pdf' aria-label='Resume' onClick={() => toggle(!closed)}>Resume</a>
                    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/lance-hemphill-250b85218/' aria-label='LinkedIn' onClick={() => toggle(!closed)}>LinkedIn</a>
                    <a rel='noopener noreferrer' target='_blank' href='https://github.com/IzykGit' aria-label='Github'>Github</a>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar
