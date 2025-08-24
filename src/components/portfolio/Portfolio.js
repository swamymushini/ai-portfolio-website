import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Container, Typography, Grid } from "@mui/material";
import { info } from "../../info/Info";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Portfolio({ innerRef }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.15,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0, scale: 0.98 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const titleVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <Box
            id={'portfolio'}
            ref={innerRef}
            sx={{
                py: { xs: 6, md: 8 },
                position: 'relative',
                background: 'var(--dark-bg)',
                color: 'var(--light-gray)'
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ y, opacity }}
                >
                    {/* Section Title */}
                    <motion.div variants={titleVariants}>
                        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                                    fontWeight: 900,
                                    mb: 4,
                                    color: 'var(--light-gray)',
                                    letterSpacing: '-0.02em',
                                    textTransform: 'uppercase',
                                    fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                }}
                            >
                                Projects
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'var(--medium-gray)',
                                    maxWidth: '600px',
                                    mx: 'auto',
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                    fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                }}
                            >
                                A collection of work that showcases my expertise in software development,
                                AI integration, and scalable architecture.
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Projects Grid */}
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            justifyContent: 'center'
                        }}
                    >
                        {info.projects.map((project, index) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={4}
                                key={index}
                                component={motion.div}
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                                }}
                            >
                                <PortfolioBlock
                                    project={project}
                                    index={index}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        style={{ textAlign: 'center', marginTop: '4rem' }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'var(--medium-gray)',
                                mb: 4,
                                fontWeight: 400,
                                fontFamily: 'Helvetica Neue, Inter, sans-serif'
                            }}
                        >
                            Interested in working together?
                        </Typography>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Box
                                component="a"
                                href="mailto:swamymushini@gmail.com"
                                sx={{
                                    display: 'inline-block',
                                    px: 6,
                                    py: 3,
                                    background: 'var(--primary-blue)',
                                    color: 'var(--white)',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'Helvetica Neue, Inter, sans-serif',
                                    '&:hover': {
                                        background: 'var(--primary-blue)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 30px rgba(0, 155, 183, 0.3)'
                                    }
                                }}
                            >
                                Let's Connect
                            </Box>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}