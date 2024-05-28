import React from 'react'
import { useState, useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'

import styles from '../styles/Contact.module.css'

const Contact = () => {

    const [hover, setHover] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        })
    })

    const hoverVariants = {
        onHover: { backgroundColor: '#415a77', width: '20rem', transition: { duration: 0.2, delay: 0 }},
        offHover: { backgroundColor: 'black', width: '14rem', transition: { duration: 0.2, delay: 0 }}
    }

    return (
        <section className={styles.contact}>

            <div data-aos="fade-right" className={styles.header}>
                <p>Contact</p>
            </div>

            <form className={styles.input_fields}>
                <div>
                    <label className={styles.input_label} for='Email'>Email:</label>
                    <input className={styles.text_input} type='text' placeholder='example@email.com' name='Email'/>
                </div>

                <div>
                    <label className={styles.input_label} for="Subject">Subject:</label>
                    <input className={styles.text_input} type='text' placeholder="How's your day?" name='Subject'/>
                </div>

                <div>
                    <label className={styles.input_label} for="Text">Text:</label>
                    <textarea className={styles.text_content} type='text' placeholder='' name='Text'/>
                </div>


                <motion.button
                variants={hoverVariants}
                animate={hover ? "onHover" : "offHover"}
                onMouseOver={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}
                className={styles.send_button}>Send</motion.button>
            </form>

        </section>
    )
}

export default Contact