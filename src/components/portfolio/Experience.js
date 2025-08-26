import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
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
        staggerChildren: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        minHeight: 'calc(100vh - 175px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        background: 'var(--dark-bg)',
        color: 'var(--light-gray)',
        py: { xs: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            component={motion.h2}
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
            Experience
          </Typography>
        </motion.div>

        {/* Experience Timeline */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 900,
            mx: 'auto',
            position: 'relative'
          }}
        >
          {info.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              sx={{ 
                position: 'relative', 
                mb: 8, 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'flex-start' },
                gap: { xs: 2, sm: 4 }
              }}
            >
              {/* Date */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: '100%', sm: '120px' },
                  mb: { xs: 2, sm: 0 }
                }}
              >
                <Typography
                  sx={{
                    background: 'linear-gradient(135deg, #FF3332 0%, #FF5555 50%, #FF3332 100%)',
                    color: 'var(--white)',
                    padding: '8px 16px',
                    display: 'inline-block',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: 'Helvetica Neue, Inter, sans-serif'
                  }}
                >
                  {exp.duration}
                </Typography>
              </Box>

              {/* Experience Content */}
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    border: '1px solid rgba(254, 74, 73, 0.3)',
                    padding: 4,
                    background: 'var(--dark-card)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(255, 51, 50, 0.4)',
                      border: '1px solid rgba(255, 51, 50, 0.6)'
                    }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'var(--light-gray)', 
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'Helvetica Neue, Inter, sans-serif'
                    }}
                  >
                    {exp.company}
                  </Typography>
                  
                  <Typography 
                    sx={{ 
                      mb: 2, 
                      fontSize: '1.125rem', 
                      background: 'linear-gradient(135deg, #FF3332 0%, #FF5555 50%, #FF3332 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 500,
                      fontFamily: 'Helvetica Neue, Inter, sans-serif'
                    }}
                  >
                    {exp.position}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    mb={3} 
                    sx={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--medium-gray)', 
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontFamily: 'Helvetica Neue, Inter, sans-serif'
                    }}
                  >
                    {exp.location}
                  </Typography>
                  
                  {exp.responsibilities.map((resp, idx) => (
                    <Typography 
                      key={idx} 
                      variant="body2" 
                      mb={2} 
                      sx={{ 
                        display: 'flex', 
                        fontSize: '0.95rem', 
                        color: 'var(--light-gray)', 
                        fontWeight: 400, 
                        lineHeight: 1.6,
                        fontFamily: 'Helvetica Neue, Inter, sans-serif'
                      }}
                    >
                      <span style={{ marginRight: '12px', color: '#FF3332', fontWeight: 700 }}>•</span> 
                      {resp}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
