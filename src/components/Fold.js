import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion, transform } from 'framer-motion';

import Selfie from '../assets/selfie.png'

import styles from '../styles/Fold.module.css';


const Fold = () => {

    const [hover, setHover] = useState(false)

    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 500
        })
    })

    const hoverVariants = {
        onHover: { backgroundColor: 'blue', width: '20rem', transition: { duration: 0.2, delay: 0 }},
        offHover: { backgroundColor: 'black', width: '14rem', transition: { duration: 0.2, delay: 0 }}
    }


    return (
        <section className={styles.fold_section}>

            <div data-aos="fade-in" className={styles.background_text}>
                <p>Front <br /> End <br /> Developer</p>
            </div>

            <div className={styles.content_container}>

                <div data-aos="fade-right" className={styles.content_text}>
                    <h1>Hello, I'm Lance, <br /> a front-end developer.</h1>
                    <motion.button
                    variants={hoverVariants}
                    animate={hover ? "onHover" : "offHover"}
                    onMouseOver={() => setHover(!hover)}
                    onMouseLeave={() => setHover(!hover)}
                    >Get Started</motion.button>
                </div>

                <img data-aos="fade-left" src={Selfie} alt='Lance Hemphill'/>
            </div>


        </section>
    )
}

export default Fold