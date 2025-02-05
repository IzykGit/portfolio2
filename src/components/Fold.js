import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Selfie from '../assets/selfie.png'

import styles from '../styles/Fold.module.css';



const Fold = () => {

    useEffect(() => {
        Aos.init({
            duration: 500
        })
    })

    const text = "Portfolio version 3.0 coming soon!";
    const typingSpeed = 40;
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
        

        if (index < text.length) {
            const timeout = setTimeout(() => {
            setDisplayedText(displayedText + text.charAt(index));
            setIndex(index + 1);
            }, typingSpeed);
    
            return () => clearTimeout(timeout);
        } 
    }, [index, displayedText, text]);



    return (
        <section className={styles.fold_section} aria-label='Fold Section'>

            <div data-aos="fade-in" className={styles.background_text}>
                <p>Software <br /> Engineer <br /></p>
            </div>

            <div className={styles.content_container}>

                <div data-aos="fade-right" className={styles.content_text}>
                    <h1>Hello, I'm Lance, <br /> a software engineer.</h1>
                    <p>{displayedText}</p>
                </div>

                <img data-aos="fade-left" data-aos-delay={100} src={Selfie} alt='Lance Hemphill' aria-label='Image of Lance Hemphill, Website Creator'/>
            </div>

        </section>
    )
}

export default Fold
