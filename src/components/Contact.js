import React from 'react'
import { useState, useEffect, useRef } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion, transform } from 'framer-motion'
import emailjs, { send } from '@emailjs/browser';


import styles from '../styles/Contact.module.css'

const Contact = () => {

    const [hover, setHover] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [clicked, setClicked] = useState("Send")


    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        })
    })

    const hoverVariants = {
        onHover: { backgroundColor: '#415a77', width: '20rem', transition: { duration: 0.2, delay: 0 }},
        offHover: { backgroundColor: '#000000', width: '14rem', transition: { duration: 0.2, delay: 0 }}
    }

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

  
        emailjs.sendForm(
            'service_tiactp1',
            'template_eani1qb',
            formRef.current,
            'of8ItaL1FBtzXYkQw',
          )
            .then(
            (res) => {
                console.log('SUCCESS!');
                setName("");
                setEmail("");
                setMessage("");
                setClicked("Message Sent")
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
    };


    const handleClicked = () => {
        if(name || email || message) {
            setClicked("Loading...")
        }
        else {
            setClicked("Send")
        }
    }
  

    return (
        <section className={styles.contact}>

            <div data-aos="fade-right" className={styles.header}>
                <p>Contact</p>
            </div>

            <form ref={formRef} className={styles.input_fields} onSubmit={sendEmail}>
                <div data-aos="fade-right">

                    <label className={styles.input_label} for="name" aria-label='Your Name'>Name</label>
                    <input
                        className={styles.text_input}
                        type="text"
                        placeholder=""
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div data-aos="fade-right">
                    <label className={styles.input_label} for="email" aria-label='Your Email'>Email</label>
                    <input
                        className={styles.text_input}
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div data-aos="fade-right">
                    <label className={styles.input_label} for="message" aria-label='Your Message'>Message</label>
                    <textarea
                        className={styles.text_content}
                        placeholder=""
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <motion.button
                variants={hoverVariants}
                animate={hover ? 'onHover' : 'offHover'}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={styles.send_button}
                type="submit"
                onClick={handleClicked}
                aria-label='Send Button'
                aria-description='This button will send your message to my email'
                >
                {clicked}
                </motion.button>
        </form>

        </section>
    )
}

export default Contact