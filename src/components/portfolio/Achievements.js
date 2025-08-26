import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { motion } from 'framer-motion';

const achievements = [
    {
        icon: <CodeIcon />,
        title: "DSA Problem Solving",
        description: "Successfully solved over 250 medium difficulty DSA problems.",
    },
    {
        icon: <EmojiEventsIcon />,
        title: "Star Performer",
        description: "Received a Star Performer Certification from Rocket Software for two consecutive years.",
    },
    {
        icon: <LightbulbIcon />,
        title: "Hackathon Finalist",
        description: "Participated in Rocket Build Hackathon and advanced to the finals among 2000 participants, where I presented my concept for the Code Expert Tool, an AI pair programming solution.",
    },
];

const Achievements = ({ innerRef }) => {
    return (
        <Box
            id="achievements"
            ref={innerRef}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--dark-bg)',
                padding: { xs: 3, md: 6 },
                color: 'var(--light-gray)'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography 
                    variant="h2" 
                    component="h2" 
                    gutterBottom 
                    align="center" 
                    sx={{ 
                        color: 'var(--light-gray)', 
                        mb: 8,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                        fontFamily: 'Helvetica Neue, Inter, sans-serif'
                    }}
                >
                    Achievements
                </Typography>
            </motion.div>
            <Box sx={{ maxWidth: '1000px', width: '100%' }}>
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <Box
                            sx={{
                                mb: 4,
                                p: 4,
                                border: index % 2 === 0 
                                    ? '1px solid rgba(254, 74, 73, 0.3)'
                                    : '1px solid rgba(0, 155, 183, 0.3)',
                                background: 'var(--dark-card)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: index % 2 === 0
                                        ? '0 8px 30px rgba(254, 74, 73, 0.2)'
                                        : '0 8px 30px rgba(0, 155, 183, 0.2)',
                                    border: index % 2 === 0
                                        ? '1px solid rgba(254, 74, 73, 0.6)'
                                        : '1px solid rgba(0, 155, 183, 0.6)'
                                }
                            }}
                        >
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' } }}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {React.cloneElement(achievement.icon, { 
                                            sx: { 
                                                fontSize: 40, 
                                                color: index % 2 === 0 ? '#FF3332' : '#0099B7'
                                            } 
                                        })}
                                    </motion.div>
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <Typography 
                                        variant="h5" 
                                        component="h3" 
                                        sx={{ 
                                            color: index % 2 === 0 ? '#FF3332' : '#0099B7',
                                            mb: 2,
                                            fontWeight: 700,
                                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                        }}
                                    >
                                        {achievement.title}
                                    </Typography>
                                    <Typography 
                                        sx={{ 
                                            color: 'var(--light-gray)',
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                            fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                        }}
                                    >
                                        {achievement.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default Achievements;