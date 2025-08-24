import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import ScrollProgress from "./components/ScrollProgress";
import { HashRouter, Route, Routes } from "react-router-dom";
import FullScreenChat from './components/chat/FullScreenChat';

// Component to handle redirection
const ResumeRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    // Map routes to the correct resume URLs
    const resumeMap = {
      '/r25': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-25.pdf',
      '/resume': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-25.pdf',
      '/r25a': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-25-a.pdf',
      '/r252': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-252.pdf',
      '/r252a': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-252-a.pdf',
      '/r25z': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-25z.pdf',
      '/r25za': 'https://gopala-swamy.netlify.app/Gopala_Swamy___Senior_Software_Engineer-25z-a.pdf',
      '/leetcode': 'https://leetcode.com/u/Gopal7417/',
      '/github': 'https://github.com/swamymushini?tab=repositories',
      '/scaler': 'https://www.scaler.com/academy/profile/c44c523094a9/',
      '/linkedin': 'https://www.linkedin.com/in/gopal-swamy-sde3/',
    };

    const path = location.pathname.toLowerCase();
    const targetUrl = resumeMap[path];

    if (targetUrl) {
      window.location.href = targetUrl;
    } else {
      // Optional: fallback if path not found
      window.location.href = 'https://gopala-swamy.netlify.app';
    }
  }, [location]);

  return null; // Nothing to render
}

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollProgress />
        <Routes>
          {/* Dynamic redirect for all /r* routes */}
          <Route path="/r25" element={<ResumeRedirect />} />
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="/r25a" element={<ResumeRedirect />} />
          <Route path="/r252" element={<ResumeRedirect />} />
          <Route path="/r252a" element={<ResumeRedirect />} />
          <Route path="/r25z" element={<ResumeRedirect />} />
          <Route path="/r25za" element={<ResumeRedirect />} />
          <Route path="/leetcode" element={<ResumeRedirect />} />
          <Route path="/linkedin" element={<ResumeRedirect />} />
          <Route path="/github" element={<ResumeRedirect />} />
          <Route path="/scaler" element={<ResumeRedirect />} />
          <Route path="/chat" element={<FullScreenChat />} />
          
          {/* BaseLayout to handle all other routes */}
          <Route path="/*" element={<BaseLayout />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
