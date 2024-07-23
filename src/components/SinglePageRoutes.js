import React from 'react';
import Home from "./home/Home";
import Skills from "./portfolio/Skills";
import Experience from "./portfolio/Experience";
import Projects from "./portfolio/Projects";
import Achievements from "./portfolio/Achievements";
import Education from "./portfolio/Education";
import { Box } from "@mui/material";

export default function SinglePageRoutes({ refs }) {
    return (
        <Box mt={'6rem'}>
            <Home innerRef={refs.refHome} />
            <Skills innerRef={refs.refSkills} />
            <Experience innerRef={refs.refExperience} />
            <Projects innerRef={refs.refProjects} />
            <Achievements innerRef={refs.refAchievements} />
            <Education innerRef={refs.refEducation} />
        </Box>
    );
}
