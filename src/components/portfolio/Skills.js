import React from 'react';
import { Box, Typography, Grid, Divider } from "@mui/material";
import { motion } from 'framer-motion';
import { info } from '../../info/Info';
import './Skills.scss';

const Skills = ({ innerRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
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
    >
      <Grid container spacing={2} maxWidth={'1200px'} alignItems={'center'}>
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                background: info.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: { xs: 'center', md: 'left' },
                textTransform: 'uppercase',
                fontWeight: 'bold'
              }}
            >
              Skills
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={1} display={'flex'} justifyContent={'center'}>
          <Divider orientation="vertical" flexItem sx={{ height: '200px', borderColor: 'white' }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              justifyContent={'flex-start'}
              gap={2}
            >
              {info.skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Box
                    className="skill-box"
                    component={'span'}
                  >
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${(skill.rating / 5) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    {skill.label}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;