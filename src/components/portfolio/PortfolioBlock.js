import React from 'react';
import { Box, Typography, Chip, Button } from "@mui/material";
import { motion } from 'framer-motion';
import { FaCode, FaArrowRight } from 'react-icons/fa';

function PortfolioBlock({ project, index }) {
   const cardVariants = {
      hidden: { opacity: 0, y: 40, scale: 0.98 },
      visible: {
         opacity: 1,
         y: 0,
         scale: 1,
         transition: {
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1]
         }
      }
   };

   const iconVariants = {
      hover: {
         scale: 1.05,
         transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
      }
   };

   return (
      <motion.div
         variants={cardVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
         whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
         }}
      >
         <Box
            sx={{
               background: 'var(--dark-card)',
               border: '2px solid var(--primary-blue)',
               borderRadius: 0,
               p: 4,
               height: '100%',
               position: 'relative',
               overflow: 'hidden',
               transition: 'all 0.3s ease',
               '&:hover': {
                  border: '2px solid var(--primary-blue)',
                  background: 'var(--dark-card)',
                  boxShadow: '0 12px 40px rgba(0, 155, 183, 0.2)'
               }
            }}
         >
            {/* Project Header */}
            <Box sx={{ mb: 4 }}>
               <Typography
                  variant="h5"
                  sx={{
                     fontWeight: 700,
                     mb: 3,
                     color: 'var(--light-gray)',
                     fontSize: { xs: '1.25rem', md: '1.5rem' },
                     letterSpacing: '-0.01em',
                     textTransform: 'uppercase',
                     fontFamily: 'Helvetica Neue, Inter, sans-serif'
                  }}
               >
                  {project.title}
               </Typography>

               {/* Technologies */}
               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                     <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                           background: 'var(--primary-blue)',
                           color: 'var(--white)',
                           border: '1px solid var(--primary-blue)',
                           fontSize: '0.75rem',
                           fontWeight: 600,
                           textTransform: 'uppercase',
                           letterSpacing: '0.05em',
                           fontFamily: 'Helvetica Neue, Inter, sans-serif',
                           '&:hover': {
                              background: 'var(--primary-blue)',
                              border: '1px solid var(--primary-blue)'
                           }
                        }}
                     />
                  ))}
                  {project.technologies.length > 4 && (
                     <Chip
                        label={`+${project.technologies.length - 4} more`}
                        size="small"
                        sx={{
                           background: 'var(--dark-card)',
                           color: 'var(--light-gray)',
                           border: '1px solid var(--primary-blue)',
                           fontSize: '0.75rem',
                           fontWeight: 600,
                           textTransform: 'uppercase',
                           letterSpacing: '0.05em',
                           fontFamily: 'Helvetica Neue, Inter, sans-serif'
                        }}
                     />
                  )}
               </Box>
            </Box>

            {/* Project Description */}
            <Box sx={{ mb: 4 }}>
               <Typography
                  variant="body2"
                  sx={{
                     color: 'var(--light-gray)',
                     lineHeight: 1.6,
                     fontSize: '0.9rem',
                     fontWeight: 400,
                     fontFamily: 'Helvetica Neue, Inter, sans-serif'
                  }}
               >
                  {project.description[0]}
               </Typography>
            </Box>

            {/* Key Features */}
            <Box sx={{ mb: 4 }}>
               <Typography
                  variant="subtitle2"
                  sx={{
                     color: 'var(--primary-blue)',
                     fontWeight: 700,
                     mb: 2,
                     fontSize: '0.875rem',
                     textTransform: 'uppercase',
                     letterSpacing: '0.1em',
                     fontFamily: 'Helvetica Neue, Inter, sans-serif'
                  }}
               >
                  Key Features
               </Typography>
               <Box component="ul" sx={{ m: 0, p: 0, pl: 2 }}>
                  {project.description.slice(1, 4).map((feature, featureIndex) => (
                     <Typography
                        key={featureIndex}
                        component="li"
                        variant="body2"
                        sx={{
                           color: 'var(--light-gray)',
                           mb: 1,
                           fontSize: '0.8rem',
                           fontWeight: 400,
                           lineHeight: 1.5,
                           fontFamily: 'Helvetica Neue, Inter, sans-serif',
                           '&::marker': {
                              color: 'var(--primary-blue)'
                           }
                        }}
                     >
                        {feature}
                     </Typography>
                  ))}
               </Box>
            </Box>

            {/* Action Buttons */}
            <Box
               sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'space-between',
                  mt: 'auto'
               }}
            >
               <motion.div
                  variants={iconVariants}
                  whileHover="hover"
               >
                  <Button
                     variant="outlined"
                     size="small"
                     startIcon={<FaCode />}
                     sx={{
                        borderColor: 'var(--primary-blue)',
                        color: 'var(--primary-blue)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        borderRadius: 0,
                        fontFamily: 'Helvetica Neue, Inter, sans-serif',
                        '&:hover': {
                           borderColor: 'var(--primary-blue)',
                           color: 'var(--primary-blue)',
                           background: 'rgba(0, 155, 183, 0.1)'
                        }
                     }}
                  >
                     Details
                  </Button>
               </motion.div>

               <motion.div
                  variants={iconVariants}
                  whileHover="hover"
               >
                  <Button
                     variant="contained"
                     size="small"
                     endIcon={<FaArrowRight />}
                     sx={{
                        background: 'var(--primary-blue)',
                        color: 'var(--white)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        borderRadius: 0,
                        fontFamily: 'Helvetica Neue, Inter, sans-serif',
                        '&:hover': {
                           background: 'var(--primary-blue)'
                        }
                     }}
                  >
                     View
                  </Button>
               </motion.div>
            </Box>
         </Box>
      </motion.div>
   );
}

export default PortfolioBlock;