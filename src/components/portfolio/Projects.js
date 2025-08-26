import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { info } from '../../info/Info';

const Projects = ({ innerRef }) => {
    const { projects } = info;
    const theme = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <Box
            ref={innerRef}
            component={'main'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'calc(100vh - 175px)'}
            id={'projects'}
            sx={{ 
                paddingTop: 8, 
                paddingX: { xs: 2, md: 4 },
                paddingBottom: 8,
                background: 'var(--dark-bg)',
                color: 'var(--light-gray)'
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h2"
                component={motion.h2}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                sx={{
                    mb: 8,
                    color: 'var(--light-gray)',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontFamily: 'Helvetica Neue, Inter, sans-serif'
                }}
            >
                Projects
            </Typography>
            
            <Typography
                variant="body1"
                component={motion.p}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                sx={{
                    mb: 8,
                    textAlign: 'center',
                    color: 'var(--medium-gray)',
                    fontSize: '1.125rem',
                    maxWidth: '600px',
                    mx: 'auto'
                }}
            >
                A collection of work that showcases my expertise in software development, AI integration, and scalable architecture.
            </Typography>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Grid container spacing={4} maxWidth={'1200px'} sx={{ mx: 'auto' }}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <motion.div variants={cardVariants}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'var(--dark-card)',
                                        border: '2px solid #FF3332',
                                        borderRadius: 0,
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 40px #FF3332',
                                            border: '2px solid #FF5555',
                                            backgroundColor: 'rgba(255, 51, 50, 0.05)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1, color: 'var(--light-gray)', display: 'flex', flexDirection: 'column', p: 4 }}>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                            gutterBottom
                                            fontWeight="bold"
                                            mb={3}
                                            sx={{
                                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                                color: '#FF3332',
                                                borderBottom: '2px solid #FF3332',
                                                paddingBottom: 1,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Box sx={{ mb: 2, flex: 1 }}>
                                            {project.description.map((point, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                                        <Typography variant="body2" component="span" sx={{ mr: 1, fontSize: '1.1rem', color: '#00BFFF', fontWeight: 'bold' }}>•</Typography>
                                                        <Typography variant="body2" sx={{ fontSize: '0.95rem', color: 'var(--light-gray)', lineHeight: 1.6 }}>{point}</Typography>
                                                    </Box>
                                                </motion.div>
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto', pt: 2 }}>
                                            {project.technologies.map((tech, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Chip
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            fontSize: '0.75rem',
                                                            backgroundColor: 'transparent',
                                                            color: 'var(--light-gray)',
                                                            border: '1px solid #00BFFF',
                                                            borderRadius: 0,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.05em',
                                                            fontWeight: 500,
                                                            '&:hover': {
                                                                backgroundColor: '#00BFFF',
                                                                color: '#ffffff',
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: '0 4px 12px rgba(0, 191, 255, 0.4)',
                                                            },
                                                        }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Box>
    );
};

export default Projects;