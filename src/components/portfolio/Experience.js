import React from 'react';
import { Box, Typography, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { info } from '../../info/Info';

const Experience = ({ innerRef }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const dateBoxVariants = {
    initial: { scale: 0, x: -50 },
    animate: {
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(166,104,255,0.6)",
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <Box
      id={'experience'}
      ref={innerRef}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: 'calc(100vh - 175px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
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
        Experience
      </Typography>
      <Box 
      sx={{
        width: '100%',
        maxWidth: 800,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: { xs: 'calc(50% - 1px)', sm: 120 },
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: 'rgba(166,104,255,0.3)',
          zIndex: 0
        }
      }}>
        {info.experience.map((exp, index) => (
          <Box key={index} sx={{ position: 'relative', mb: 6, display: 'flex', alignItems: 'flex-start' }}>
            <motion.div
              variants={dateBoxVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{
                flexShrink: 0,
                width: isMobile ? '100%' : 100,
                marginRight: isMobile ? 0 : 40,
                marginBottom: isMobile ? 2 : 0,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgb(166,104,255)',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  display: 'inline-block',
                }}
              >
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {exp.duration}
                </Typography>
              </Box>
            </motion.div>
            <motion.div variants={itemVariants} style={{ flex: 1 }}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <CardContent sx={{ color: 'white' }}>
                  <Typography variant="h6" component="div" fontWeight="bold" mb={1}>
                    {exp.company}
                  </Typography>
                  <Typography sx={{ mb: 1, fontSize: '1.1rem', color: 'rgb(166,104,255)' }}>
                    {exp.position}
                  </Typography>
                  <Typography variant="body2" mb={2} sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    {exp.location}
                  </Typography>
                  {exp.responsibilities.map((resp, idx) => (
                    <Typography key={idx} variant="body2" mb={1} sx={{ display: 'flex', fontSize: '0.9rem' }}>
                      <span style={{ marginRight: '8px', color: 'rgb(166,104,255)' }}>•</span> {resp}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
