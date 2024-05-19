import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {

    const [closed, setClosed] = useState(true)

    function handleMenu() {
        setClosed(!closed)
    }

    return (
        <>
            <div className={closed ? styles.hamburger_menu : styles.hamburger_menu_open} onClick={handleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <CSSTransition in={closed} timeout={500}>
                <nav className={closed ? styles.nav_closed : styles.nav}>

                    <div className={closed ? styles.close_list : styles.navbar}>
                        <a href='#'>About</a>
                        <a href='#'>Projects</a>
                        <a href='#'>Resume</a>
                        <a href='#'>LinkedIn</a>
                    </div>
                </nav>
            </CSSTransition>

        </>
    )
}

export default Navbar
