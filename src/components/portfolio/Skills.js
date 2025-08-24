import React from 'react';
import { Box, Typography, Grid, Divider, Container } from "@mui/material";
import { motion } from 'framer-motion';
import { info } from '../../info/Info';
import './Skills.scss';

const Skills = ({ innerRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      ref={innerRef}
      component={'main'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
      id={'skills'}
      sx={{
        px: { xs: 2, md: 4 },
        background: 'var(--dark-bg)',
        color: 'var(--light-gray)',
        py: { xs: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 900,
                  mb: 4,
                  color: 'var(--light-gray)',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  fontFamily: 'Helvetica Neue, Inter, sans-serif'
                }}
              >
                Skills
              </Typography>
            </Box>
          </motion.div>

          {/* Skills Grid */}
          <Grid container spacing={6} maxWidth={'1200px'} alignItems={'flex-start'}>
            {Object.entries(info.skills).map(([category, skills], categoryIndex) => (
              <Grid item xs={12} md={6} key={categoryIndex}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 6 }}>
                    {/* Category Title */}
                    <Typography 
                      variant="h3" 
                      sx={{
                        color: 'var(--primary-blue)',
                        fontWeight: 700,
                        mb: 4,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        fontFamily: 'Helvetica Neue, Inter, sans-serif'
                      }}
                    >
                      {category}
                    </Typography>

                    {/* Skills List */}
                    <Box
                      display={'flex'}
                      flexWrap={'wrap'}
                      gap={2}
                    >
                      {skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Box
                            className="skill-box"
                            component={'span'}
                            sx={{
                              mb: 2,
                              mx: 0,
                            }}
                          >
                            <motion.div
                              className="skill-fill"
                              initial={{ width: 0 }}
                              animate={{ width: `${(skill.rating / 5) * 100}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            />
                            {skill.label}
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
