import React from 'react';
import { Box, Typography, Paper, Grid, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { motion } from 'framer-motion';
import { info } from '../../info/Info';

const educationData = [
  {
    icon: <SchoolIcon fontSize="large" />,
    heading: "Bachelor's Degree",
    title: "Jawaharlal Nehru Technological University",
    period: "Jul 2015 - Apr 2019",
    description: "Electrical Engineering",
    additionalInfo: "CGPA: 9.3",
    color: "#4A90E2"
  },
  {
    icon: <MenuBookIcon fontSize="large" />,
    heading: "Course Work",
    title: "SCALER ACADEMY",
    period: "2022",
    description: "Specialization Course in Software Engineering",
    additionalInfo: "DSA, HLD, LLD",
    color: "#50C878"
  },
];

const EducationCard = ({ item, index }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: 4,
          background: 'var(--dark-card)',
          border: index % 2 === 0 
            ? '1px solid rgba(254, 74, 73, 0.3)'
            : '1px solid rgba(0, 155, 183, 0.3)',
          borderRadius: 0,
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: index % 2 === 0
              ? '0 12px 40px rgba(254, 74, 73, 0.3)'
              : '0 12px 40px rgba(0, 155, 183, 0.3)',
            border: index % 2 === 0
              ? '1px solid rgba(254, 74, 73, 0.6)'
              : '1px solid rgba(0, 155, 183, 0.6)'
          },
        }}
      >
        <Box sx={{ position: 'absolute', top: 20, right: 20, color: index % 2 === 0 ? '#FF3332' : '#0099B7' }}>
          {item.icon}
        </Box>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <Typography 
            variant="h4" 
            component="h3" 
            gutterBottom 
            fontWeight="bold" 
            sx={{ 
              mb: 2,
              color: index % 2 === 0 ? '#FF3332' : '#0099B7',
              fontSize: { xs: '1.5rem', md: '2rem' },
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'Helvetica Neue, Inter, sans-serif'
            }}
          >
            {item.heading}
          </Typography>
        </motion.div>
        <Typography 
          variant="h5" 
          component="h4" 
          gutterBottom 
          fontWeight="bold" 
          sx={{
            color: 'var(--light-gray)',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontFamily: 'Helvetica Neue, Inter, sans-serif'
          }}
        >
          {item.title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{
            color: 'var(--medium-gray)',
            fontFamily: 'Helvetica Neue, Inter, sans-serif'
          }}
        >
          {item.period}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mt: 2,
            color: 'var(--light-gray)',
            lineHeight: 1.6,
            fontFamily: 'Helvetica Neue, Inter, sans-serif'
          }}
        > 
          {item.description}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 1, 
            fontStyle: 'italic',
            color: index % 2 === 0 ? '#FF3332' : '#0099B7',
            fontWeight: 500,
            fontFamily: 'Helvetica Neue, Inter, sans-serif'
          }}
        >
          {item.additionalInfo}
        </Typography>
      </Paper>
    </motion.div>
  );
}

const Education = ({innerRef}) => {
  const theme = useTheme();

  return (
    <Box
      ref={innerRef}
      id={'education'}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--dark-bg)',
        padding: { xs: 3, md: 6 },
        color: 'var(--light-gray)'
      }}
    >
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          mb: 8,
          color: 'var(--light-gray)',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
          fontFamily: 'Helvetica Neue, Inter, sans-serif'
        }}
      >
        Education
      </Typography>
      <Grid container spacing={4} sx={{ maxWidth: '800px', margin: '0 auto' }}>
        {educationData.map((item, index) => (
          <Grid item xs={12} key={index}>
            <EducationCard item={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;