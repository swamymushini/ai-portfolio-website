import React, { useState, useEffect } from 'react';
import Style from './Navbar.module.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Box, Container, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Typography } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'Skills',
        to: 'skills',
        active: 'skills'
    },
    {
        name: 'Experience',
        to: 'experience',
        active: 'experience'
    },
    {
        name: 'Projects',
        to: 'projects',
        active: 'projects'
    },
    {
        name: 'Achievements',
        to: 'achievements',
        active: 'achievements'
    },
    {
        name: 'Education',
        to: 'education',
        active: 'education'
    }
];

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Navbar({ active, setActive }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const linkVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <Box 
                component={'nav'} 
                width={'100%'} 
                position={singlePage ? 'fixed' : 'relative'} 
                className={Style.dark}
                sx={{
                    zIndex: 1000,
                    transition: 'all 0.3s ease',
                    background: isScrolled 
                        ? 'rgba(0, 0, 0, 0.98)' 
                        : 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: isScrolled 
                        ? '1px solid var(--dark-border)' 
                        : 'none'
                }}
            >
                <Container maxWidth="lg">
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 3
                        }}
                    >
                        {/* Logo */}
                        <motion.div
                            variants={logoVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Link 
                                to={singlePage ? '#home' : '/home'}
                                scroll={el => scrollWidthOffset(el)}
                                smooth
                                onClick={() => setActive('home')}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    sx={{
                                        color: 'var(--primary-blue)',
                                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                                        fontWeight: 300,
                                        cursor: 'pointer',
                                        letterSpacing: '-0.01em',
                                        fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                    }}
                                >
                                    {info.initials}
                                </Box>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <Box 
                                component={'ul'} 
                                display={'flex'} 
                                gap={5}
                                sx={{ 
                                    listStyle: 'none',
                                    m: 0,
                                    p: 0
                                }}
                            >
                                {links.map((link, index) => (
                                    <motion.li 
                                        key={index}
                                        custom={index}
                                        variants={linkVariants}
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link 
                                            to={singlePage ? `#${link.to}` : `/${link.to}`}
                                            scroll={el => scrollWidthOffset(el)}
                                            smooth
                                            onClick={() => setActive(link.active)}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Box
                                                sx={{
                                                    color: link.active === active ? 'var(--primary-blue)' : 'var(--medium-gray)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 400,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.15em',
                                                    padding: '0.5rem 0',
                                                    transition: 'all 0.2s ease',
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    fontFamily: 'Helvetica Neue, Inter, sans-serif',
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        width: link.active === active ? '100%' : '0%',
                                                        height: '1px',
                                                        background: 'var(--primary-blue)',
                                                        transition: 'width 0.2s ease'
                                                    },
                                                    '&:hover': {
                                                        color: 'var(--primary-blue)',
                                                        '&::after': {
                                                            width: '100%'
                                                        }
                                                    }
                                                }}
                                            >
                                                {link.name}
                                            </Box>
                                        </Link>
                                    </motion.li>
                                ))}
                            </Box>
                        )}

                        {/* Mobile Menu Button */}
                        {isMobile && (
                            <IconButton
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: 'var(--light-gray)',
                                    '&:hover': {
                                        background: 'rgba(0, 155, 183, 0.1)'
                                    }
                                }}
                            >
                                <FaBars />
                            </IconButton>
                        )}
                    </Box>
                </Container>

                {/* Mobile Drawer */}
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: 280,
                            background: 'var(--dark-bg)',
                            borderLeft: '1px solid var(--dark-border)'
                        }
                    }}
                >
                    <Box sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                            <Typography
                                sx={{
                                    color: 'var(--primary-blue)',
                                    fontSize: '1.5rem',
                                    fontWeight: 300,
                                    fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                }}
                            >
                                {info.initials}
                            </Typography>
                            <IconButton
                                onClick={handleDrawerToggle}
                                sx={{ color: 'var(--light-gray)' }}
                            >
                                <FaTimes />
                            </IconButton>
                        </Box>
                        
                        <List>
                            {links.map((link, index) => (
                                <ListItem 
                                    key={index}
                                    component={motion.div}
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => {
                                        setActive(link.active);
                                        setMobileOpen(false);
                                    }}
                                    sx={{
                                        cursor: 'pointer',
                                        mb: 1,
                                        '&:hover': {
                                            background: 'rgba(0, 155, 183, 0.1)'
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={link.name}
                                        sx={{
                                            color: link.active === active ? 'var(--primary-blue)' : 'var(--medium-gray)',
                                            textTransform: 'uppercase',
                                            fontWeight: 400,
                                            letterSpacing: '0.15em',
                                            fontSize: '0.75rem',
                                            fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </motion.div>
    );
}