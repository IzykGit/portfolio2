import React, {useEffect} from 'react';
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

    return (
        <section className={styles.fold_section}>

            <div data-aos="fade-in" className={styles.background_text}>
                <p>Front <br /> End <br /> Developer</p>
            </div>

            {/* <div className={styles.text_container}>
                <h1>Hello, I'm Lance, <br /> a Front-End Developer.</h1>
                <img src={Selfie} alt='Lance Hemphill'/>
            </div> */}


        </section>
    )
}

export default Fold