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
                background: 'transparent',
                padding: 3,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ color: 'white', mb: 6 }}>
                    Achievements
                </Typography>
            </motion.div>
            <Box sx={{ maxWidth: '800px', width: '100%' }}>
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <Grid container spacing={3} sx={{ mb: 4 }} alignItems="center">
                            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {React.cloneElement(achievement.icon, { sx: { fontSize: 40, color: 'primary.main' } })}
                                </motion.div>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h5" component="h3" sx={{ color: 'primary.main', mb: 1 }}>
                                    {achievement.title}
                                </Typography>
                                <Typography sx={{ color: 'white' }}>{achievement.description}</Typography>
                            </Grid>
                        </Grid>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default Achievements;