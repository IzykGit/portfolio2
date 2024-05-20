import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from '../styles/About.module.css';


const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        })
    })

    return (
        <section className={styles.about_section}>

            <p data-aos="fade-right" className={styles.about}>About</p>

            <p data-aos="fade-right" data-aos-delay="100" className={styles.about_text}>Hello, my name is <span style={{fontWeight: 700}}>Lance Hemphill</span>, and I am a Frontend Developer.
            My journey in Web Development began in late 2022, with intermittent learning throughout 2023.
            However, from mid to late 2023, I fully committed to learning the ins and outs of software and understanding how the digital world works.
            Currently, my primary goal is to continually enhance my skills and knowledge while seeking valuable opportunities.</p>

            <p data-aos="fade-right" data-aos-delay="200" className={styles.about_text}>When I am not studying though I am usually playing video games, doing hobbies of mine such as car restoration, or looking for new music.</p>

        </section>
    )
}

export default About