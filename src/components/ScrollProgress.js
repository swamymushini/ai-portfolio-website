import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--primary-blue)',
                transformOrigin: '0%',
                scaleX,
                opacity,
                zIndex: 9999
            }}
        />
    );
};

export default ScrollProgress;
