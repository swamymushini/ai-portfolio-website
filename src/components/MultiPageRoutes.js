import Home from "./home/Home";
import Skills from "./portfolio/Skills";
import Experience from "./portfolio/Experience";
import Projects from "./portfolio/Projects";
import Achievements from "./portfolio/Achievements";
import Education from "./portfolio/Education";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/skills'} element={<Skills />} />
            <Route exact path={'/experience'} element={<Experience />} />
            <Route exact path={'/projects'} element={<Projects />} />
            <Route exact path={'/achievements'} element={<Achievements />} />
            <Route exact path={'/education'} element={<Education />} />
        </Routes>
    )
}