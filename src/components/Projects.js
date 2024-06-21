import React from 'react';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import projects from '../data/ProjectData'



import styles from '../styles/Projects.module.css'

const Projects = () => {

    const [hoverDemo, setHoverDemo] = useState(null)
    const [hoverSrc, setHoverSrc] = useState(null)

    const hoverVariants = {
        onHover: { backgroundColor: '#415a77', width: '13rem', transition: { duration: 0.2, delay: 0 }},
        offHover: { backgroundColor: '#000000', width: '10rem', transition: { duration: 0.2, delay: 0 }}
    }

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        })
    })


  
    return (
        <section className={styles.projects_section} aria-label='Project Section'>

            <div className={styles.projects_head}>
                <h2 data-aos="fade-in">Projects -</h2>
            </div>


            <div className={styles.projects_container}>

                {projects.map((project, index) => (
                    <div data-aos="fade-right" key={project.name} className={styles.project}>
                            
                        <div className={styles.project_links}>
                            <p className={styles.project_name}>{project.name}</p>
                            <motion.a
                            variants={hoverVariants} animate={hoverDemo === index ? 'onHover' : 'offHover'}
                            onMouseOver={() => setHoverDemo(index)} onMouseLeave={() => setHoverDemo(null)}
                            href={project.link} target='_blank' rel="noreferrer"
                            aria-label='Live Demo of Site'
                            >demo</motion.a>

                            <motion.a
                            variants={hoverVariants} animate={hoverSrc === index ? 'onHover' : 'offHover'}
                            onMouseOver={() => setHoverSrc(index)} onMouseLeave={() => setHoverSrc(null)}
                            href={project.code} target='_blank' rel="noreferrer"
                            aria-label='Project Source Code' 
                            >src code</motion.a>
                        </div>

                        <img src={project.src} alt={`${project.name} Project`} className={styles.project_image} aria-label='Project Image'/>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Projects