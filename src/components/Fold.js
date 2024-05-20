import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from '../styles/Fold.module.css';

const Fold = () => {

    useEffect(() => {
        Aos.init({
            duration: 500
        })
    })

    return (
        <section className={styles.fold_section}>

            <div className={styles.text_container}>

                <p data-aos="fade-right" className={styles.name}>Lance</p>

                <p data-aos="fade-right" data-aos-delay="100" className={styles.name}>Hemphill</p>


                <p data-aos="fade-right" data-aos-delay="200" className={styles.web_developer}>Front End <span>Developer</span></p>
            </div>

        </section>
    )
}

export default Fold