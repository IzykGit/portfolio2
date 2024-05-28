import React from 'react';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import projects from '../data/ProjectData'

import launch from '../assets/launch.png';



import styles from '../styles/Projects.module.css'

const Projects = () => {

  useEffect(() => {
    Aos.init({
        duration: 500,
        once: true
    })
  })


  
  return (
    <section className={styles.projects_section}>

        <div className={styles.projects_head}>
            <p data-aos="fade-right">Projects -</p>
        </div>


        <div className={styles.projects_container}>

            {projects.map(project => (
                <div key={project.name}>
                    <a rel="noreferrer" className={styles.project} href={project.link} target='_blank'>
                        <p className={styles.project_name}>{project.name} <img src={launch} alt='navigate'/></p>
                        <img src={project.src} alt={`${project.name} Project`} className={styles.project_image}/>
                    </a>
                </div>
            ))}

        </div>

    </section>
  )
}

export default Projects