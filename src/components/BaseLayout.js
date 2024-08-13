import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';
import ChatBot from './ChatBot'; // Import the new ChatBot component

export default function BaseLayout() {
   const location = useLocation()

   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
   const refHome = useScrollObserver(setActive);
   const refSkills = useScrollObserver(setActive);
   const refExperience = useScrollObserver(setActive);
   const refProjects = useScrollObserver(setActive);
   const refAchievements = useScrollObserver(setActive);
   const refEducation = useScrollObserver(setActive);
   const refResume = useScrollObserver(setActive);

   return (
      <Box className={Style.dark}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar active={active} setActive={setActive} />
            </Grid>
            <Grid item flexGrow={1}>
               {singlePage ? <SinglePageRoutes refs={{ refHome, refSkills, refExperience, refProjects, refAchievements, refEducation, refResume }} /> : <MultiPageRoutes />}
            </Grid>
         </Grid>
         <ChatBot /> {/* Add the ChatBot component here */}
      </Box>
   )
}