import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
         <BrowserRouter>
            <Routes>
               {/* Route for redirecting /resume */}
               <Route path="/resume" element={<ResumeRedirect />} />
               {/* BaseLayout to handle all other routes */}
               <Route path="/*" element={<BaseLayout />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
