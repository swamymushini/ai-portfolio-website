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
        elevation={10}
        sx={{
          padding: theme.spacing(3),
          background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: `0 20px 30px ${item.color}33`,
          },
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 10, color: item.color }}>
          {item.icon}
        </Box>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <Typography variant="h4" component="h3" gutterBottom fontWeight="bold" color={item.color} sx={{ mb: 2 }}>
            {item.heading}
          </Typography>
        </motion.div>
        <Typography variant="h5" component="h4" gutterBottom fontWeight="bold" color='white'>
          {item.title}
        </Typography>
        <Typography variant="subtitle1" color='white'>
          {item.period}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color='white'> 
          {item.description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }} color={item.color}>
          {item.additionalInfo}
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            bottom: -30,
            right: -30,
            width: 100,
            height: 100,
            borderRadius: '50%',
            backgroundColor: `${item.color}22`,
            zIndex: 0,
          }}
        />
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
        background: 'transparent',
        padding: theme.spacing(3),
      }}
    >
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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