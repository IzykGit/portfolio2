import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useInView } from "framer-motion"

import styles from '../styles/Fold.module.css';

const Fold = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref}>
            <div>
                <motion.p
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={isInView ? { y: '0%', opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                    className={styles.name}
                >Lance</motion.p>

                <motion.p
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={isInView ? { y: '0%', opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className={styles.name}
                >Hemphill</motion.p>
            </div>
            <div>
                
            </div>

        </section>
    )
}

export default Fold