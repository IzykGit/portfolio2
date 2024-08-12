export const hoverVariants = {
    onHover: { backgroundColor: '#415a77', width: '13rem', transition: { duration: 0.2, delay: 0 }},
    offHover: { backgroundColor: '#000000', width: '10rem', transition: { duration: 0.2, delay: 0 }}
}



export const hamburgerVariants = {
    ham_1: { transform: `rotateZ(${45}deg) translateY(${0.6}rem) translateX(${0.35}rem)` },
    ham_2: { width: '0rem' },
    ham_3: { transform: `rotateZ(${-45}deg) translateY(${-0.5}rem) translateX(${0.25}rem)`, },

    openSpin: { transform: `rotate(${180}deg`, transition: { duration: 0.5 }},
    closeSpin: { transform: `rotate(${0}deg`, transition: { duration: 0.3 }}
}


export const navVariants = {
    open: { width: '100%', height: '100vh', transition: { duration: 0.3 }  },
    closed: { width: '100%', height: '0', transition: { duration: 0.3 } }
}