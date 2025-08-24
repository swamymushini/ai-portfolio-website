import React from 'react';
import Home from "./home/Home";
import Skills from "./portfolio/Skills";
import Experience from "./portfolio/Experience";
import Portfolio from "./portfolio/Portfolio";
import Achievements from "./portfolio/Achievements";
import Education from "./portfolio/Education";
import { Box } from "@mui/material";
import { motion } from 'framer-motion';

export default function SinglePageRoutes({ refs }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Box mt={'6rem'}>
                <motion.div variants={sectionVariants}>
                    <Home innerRef={refs.refHome} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <Skills innerRef={refs.refSkills} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <Experience innerRef={refs.refExperience} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <Portfolio innerRef={refs.refProjects} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <Achievements innerRef={refs.refAchievements} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <Education innerRef={refs.refEducation} />
                </motion.div>
            </Box>
        </motion.div>
    );
}
