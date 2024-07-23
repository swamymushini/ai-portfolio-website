import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
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
    const theme = useTheme();

    return (
        <Box
            id = {'achievements'}
            ref={innerRef}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                padding: theme.spacing(3),
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ color: 'white', mb: 4 }}>
                    Achievements
                </Typography>
            </motion.div>
            <Box
                sx={{
                    maxWidth: '1000px',
                    width: '100%',
                }}
            >
                <Timeline position="right">
                    {achievements.map((achievement, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                                        {achievement.icon}
                                    </TimelineDot>
                                </motion.div>
                                {index !== achievements.length - 1 && <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            padding: '20px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '10px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                                transition: 'all 0.3s ease-in-out',
                                            },
                                            width: '100%',
                                        }}
                                    >
                                        <Typography variant="h6" component="h3" sx={{ color: 'primary.main', mb: 1 }}>
                                            {achievement.title}
                                        </Typography>
                                        <Typography sx={{ color: 'white' }}>{achievement.description}</Typography>
                                    </Paper>
                                </motion.div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
};

export default Achievements;