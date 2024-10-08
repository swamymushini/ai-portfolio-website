import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter, Route, Routes } from "react-router-dom";

// Component to handle redirection
const ResumeRedirect = () => {
  useEffect(() => {
    window.location.href = "https://drive.google.com/file/d/1r9eRqU2kVOeJcZJHOhSgwDd9so_aWc2q/view";
  }, []);

  return null; // Nothing to render
}

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          {/* Route for redirecting /resume */}
          <Route path="/resume" element={<ResumeRedirect />} />
          {/* BaseLayout to handle all other routes */}
          <Route path="/*" element={<BaseLayout />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
