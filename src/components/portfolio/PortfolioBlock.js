import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import styled from 'styled-components';

import '@react-pdf-viewer/core/lib/styles/index.css';

// Styled components
const StyledDiv = styled.div`
  position: relative; /* For positioning the button */
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;

  .rpv-core__viewer {
    border: none !important;
  }

  .rpv-core__toolbar {
    display: none !important;
  }

  .rpv-core__toolbar-button {
    display: none !important;
  }

  .rpv-core__inner-page {
    background-color: #1f1f1f;
  }
`;

const DownloadButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const Resume = () => {
   // Function to handle the download
   const handleDownload = () => {
      // const link = document.createElement('a');
      // link.href = '/resume.pdf'; // Path to your PDF file
      // link.download = 'resume.pdf'; // Desired filename
      // link.click();
   };

   return (
      <div>
         <DownloadButton onClick={handleDownload}>
            Download
         </DownloadButton>
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <StyledDiv>
               <Viewer
                  fileUrl="/resume.pdf"
               />
            </StyledDiv>
         </Worker>
      </div>
   );
};

export default Resume;
