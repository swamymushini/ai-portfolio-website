import React, { useState, useEffect } from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const FloatingActionButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonVariants = {
        hidden: { 
            scale: 0, 
            opacity: 0
        },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
        },
        tap: {
            scale: 0.98
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        zIndex: 1000
                    }}
                >
                    <Tooltip title="Back to Top" placement="left">
                        <Fab
                            onClick={scrollToTop}
                            sx={{
                                background: 'var(--primary-blue)',
                                color: 'var(--white)',
                                width: 48,
                                height: 48,
                                boxShadow: '0 4px 20px rgba(0, 155, 183, 0.3)',
                                transition: 'all 0.3s ease',
                                borderRadius: '0',
                                '&:hover': {
                                    background: 'var(--primary-blue)',
                                    boxShadow: '0 6px 25px rgba(0, 155, 183, 0.4)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <FaArrowUp />
                        </Fab>
                    </Tooltip>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingActionButton;
