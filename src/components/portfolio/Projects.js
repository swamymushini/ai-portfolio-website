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
            sx={{ paddingTop: 15, paddingX: 2 }}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Grid container spacing={4} maxWidth={'1500px'}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div variants={cardVariants}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                                        border: '1px solid rgba(255, 255, 255, 0.18)',
                                        borderRadius: '15px',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 15px 30px 0 rgba(31, 38, 135, 0.5)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1, color: 'white', display: 'flex', flexDirection: 'column' }}>
                                        <Typography
                                            variant="h4"
                                            component="div"
                                            gutterBottom
                                            mb={2}
                                            sx={{
                                                fontSize: '1.6rem',
                                                color: '#fec846',
                                                borderBottom: `2px solid ${theme.palette.primary.main}`,
                                                padding: 1.4
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
                                                        <Typography variant="body2" component="span" sx={{ mr: 1, fontSize: '1.5rem', color: theme.palette.secondary.main }}>•</Typography>
                                                        <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>{point}</Typography>
                                                    </Box>
                                                </motion.div>
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
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
                                                            fontSize: '1rem',
                                                            backgroundColor: theme.palette.primary.main,
                                                            color: 'white',
                                                            '&:hover': {
                                                                backgroundColor: theme.palette.primary.dark,
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