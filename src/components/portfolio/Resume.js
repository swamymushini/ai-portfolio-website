import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { info } from '../../info/Info';
import { Typography } from "@mui/material";
import { motion } from 'framer-motion';

// Styled components
const StyledDiv = styled.div`
  position: relative;
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

const Resume = ({ innerRef }) => {
  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF file
    link.download = 'Gopala Swamy-Senior Software Engineer.pdf'; // Desired filename
    link.click();
  };

  return (
    <Box ref={innerRef} id={'resume'}>
      <Typography
        variant="h2"
        sx={{
          mb: 5,
          background: info.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}
      >
        Resume
      </Typography>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <StyledDiv>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              marginLeft: '10rem',
              backgroundColor: info.baseColor,
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(166,104,255,0.3)',
                filter: 'brightness(120%)',
              },
            }}
          >
            Download
          </Button>
          <Viewer
            fileUrl="/resume.pdf"
          />
        </StyledDiv>
      </Worker>
    </Box>
  );
};

export default Resume;