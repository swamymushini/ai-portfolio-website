import React from 'react';
import me from '../../img/IMG_2567124.jpg';
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import ChatInterface from './ChatInterface';

export default function Home({ innerRef }) {
   const { scrollYProgress } = useScroll();
   const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

   // Function to parse text and render bold blue text for ** markers
   const parseTextWithBold = (text) => {
      const parts = text.split('**');
      return parts.map((part, index) => {
         if (index % 2 === 1) {
            // This is text between ** markers
            return (
               <Typography
                  key={index}
                  component="span"
                  sx={{
                     fontSize: { xs: '1.4rem', md: '1.55rem' },
                     fontWeight: 800,
                     color: 'var(--primary-blue)',
                     fontFamily: 'Inter, Helvetica Neue, sans-serif'
                  }}
               >
                  {part}
               </Typography>
            );
         }
         // Regular text
         return part;
      });
   };

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            duration: 1.2,
            staggerChildren: 0.3,
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
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
         }
      }
   };

   return (
      <Box 
         ref={innerRef} 
         component={'main'} 
         id={'home'}
         sx={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--dark-bg)',
            color: 'var(--light-gray)',
            overflow: 'hidden',
            '&::before': {
               content: '""',
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               backgroundImage: `url(${me})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               opacity: 0.15,
               filter: 'grayscale(100%) contrast(1.2)',
               zIndex: 1
            },
            '&::after': {
               content: '""',
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               background: 'rgba(0, 0, 0, 0.4)',
               zIndex: 1
            }
         }}
      >
         {/* Content */}
         <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               style={{ y, opacity }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     minHeight: '80vh',
                     gap: { xs: 4, md: 8, lg: 12 },
                     flexDirection: { xs: 'column', lg: 'row' }
                  }}
               >
                  {/* Left Side - Personal Information */}
                  <Box
                     sx={{
                        flex: { xs: 'none', lg: '0 0 45%' },
                        maxWidth: { xs: '100%', lg: '600px' },
                        pl: { xs: 2, md: 4, lg: 8 }
                     }}
                  >
                     {/* Name - Large, Bold Typography */}
                     <motion.div variants={itemVariants}>
                        <Typography
                           variant="h1"
                           sx={{
                              fontSize: { xs: '2.8rem', md: '4.5rem', lg: '5.5rem' },
                              fontWeight: 900,
                              mb: 2,
                              color: 'var(--light-gray)',
                              letterSpacing: '-0.02em',
                              lineHeight: 0.9,
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              textTransform: 'uppercase',
                              whiteSpace: 'nowrap'
                           }}
                        >
                           GOPALA SWAMY
                        </Typography>
                        <Typography
                           variant="h2"
                           sx={{
                              fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' },
                              fontWeight: 300,
                              mb: 3,
                              color: 'var(--light-gray)',
                              letterSpacing: '-0.01em',
                              lineHeight: 1,
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              textTransform: 'uppercase'
                           }}
                        >
                           Mushini
                        </Typography>
                     </motion.div>

                     {/* Description */}
                     <motion.div variants={itemVariants}>
                        <Typography
                           variant="body1"
                           sx={{
                              fontSize: { xs: '1.4rem', md: '1.55rem' },
                              lineHeight: 1.6,
                              color: 'var(--medium-gray)',
                              mb: 3,
                              fontWeight: 400,
                              fontFamily: 'Inter, Helvetica Neue, sans-serif',
                              letterSpacing: '0.01em'
                           }}
                        >
                           {parseTextWithBold("I'm a backend-focused software engineer with **6+ years** of experience building **scalable, distributed systems**. Currently working at Rocket Software. Let's build something impactful.")}
                        </Typography>
                     </motion.div>

                     {/* Current Role */}
                     <motion.div variants={itemVariants}>
                        <Typography
                           variant="h2"
                           sx={{
                              fontSize: { xs: '1.3rem', md: '1.5rem' },
                              fontWeight: 400,
                              mb: 3,
                              color: 'var(--primary-blue)',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              fontFamily: 'Inter, Helvetica Neue, sans-serif'
                           }}
                        >
                           Senior Software Engineer
                        </Typography>
                     </motion.div>

                     {/* Contact Links */}
                     <motion.div variants={itemVariants}>
                        <Box
                           sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 1,
                              mb: 3
                           }}
                        >
                           {/* Email */}
                           <Box
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 1.5
                              }}
                           >
                              <FaEnvelope 
                                 style={{ 
                                    color: 'var(--primary-blue)', 
                                    fontSize: '1.1rem'
                                 }} 
                              />
                              <Typography
                                 component="a"
                                 href="mailto:swamymushini@gmail.com"
                                 sx={{
                                    fontSize: '1.2rem',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                       color: 'var(--primary-blue)',
                                       textDecoration: 'underline'
                                    }
                                 }}
                              >
                                 swamymushini@gmail.com
                              </Typography>
                           </Box>

                           {/* Phone */}
                           <Box
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 1.5
                              }}
                           >
                              <FaPhone 
                                 style={{ 
                                    color: 'var(--primary-blue)', 
                                    fontSize: '1.1rem'
                                 }} 
                              />
                              <Typography
                                 component="a"
                                 href="tel:+919553307417"
                                 sx={{
                                    fontSize: '1.2rem',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                       color: 'var(--primary-blue)',
                                       textDecoration: 'underline'
                                    }
                                 }}
                              >
                                 +91 9553307417
                              </Typography>
                           </Box>

                           {/* Resume and Cover Letter */}
                           <Box
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 4,
                                 mt: 1
                              }}
                           >
                              <Box
                                 sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5
                                 }}
                              >
                                 <FaFileAlt 
                                    style={{ 
                                       color: 'var(--primary-blue)', 
                                       fontSize: '1.1rem'
                                    }} 
                                 />
                                 <Typography
                                    component="a"
                                    href="/#/resume"
                                    sx={{
                                       fontSize: '1.2rem',
                                       color: 'var(--light-gray)',
                                       textDecoration: 'underline',
                                       fontWeight: 500,
                                       fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                       transition: 'all 0.2s ease',
                                       '&:hover': {
                                          color: 'var(--primary-blue)'
                                       }
                                    }}
                                 >
                                    Resume
                                 </Typography>
                              </Box>
                              
                              <Box
                                 sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5
                                 }}
                              >
                                 <FaExternalLinkAlt 
                                    style={{ 
                                       color: 'var(--primary-blue)', 
                                       fontSize: '1.1rem'
                                    }} 
                                 />
                                 <Typography
                                    component="a"
                                    href="/#/resume"
                                    sx={{
                                       fontSize: '1.2rem',
                                       color: 'var(--light-gray)',
                                       textDecoration: 'underline',
                                       fontWeight: 500,
                                       fontFamily: 'Inter, Helvetica Neue, sans-serif',
                                       transition: 'all 0.2s ease',
                                       '&:hover': {
                                          color: 'var(--primary-blue)'
                                       }
                                    }}
                                 >
                                    Cover Letter
                                 </Typography>
                              </Box>
                           </Box>
                        </Box>
                     </motion.div>

                     {/* Social Icons */}
                     <motion.div variants={itemVariants}>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 3
                           }}
                        >
                           {/* LinkedIn Icon */}
                           <Box
                              component="a"
                              href="https://www.linkedin.com/in/gopal-swamy-sde3/"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: '40px',
                                 height: '40px',
                                 borderRadius: '50%',
                                 background: 'rgba(0, 155, 183, 0.1)',
                                 border: '1px solid var(--primary-blue)',
                                 cursor: 'pointer',
                                 transition: 'all 0.3s ease',
                                 '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0, 155, 183, 0.3)'
                                 }
                              }}
                           >
                              <FaLinkedin 
                                 style={{ 
                                    color: 'var(--primary-blue)', 
                                    fontSize: '1.2rem',
                                    transition: 'all 0.3s ease'
                                 }} 
                              />
                           </Box>

                           {/* GitHub Icon */}
                           <Box
                              component="a"
                              href="https://github.com/swamymushini"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 width: '40px',
                                 height: '40px',
                                 borderRadius: '50%',
                                 background: 'rgba(0, 155, 183, 0.1)',
                                 border: '1px solid var(--primary-blue)',
                                 cursor: 'pointer',
                                 transition: 'all 0.3s ease',
                                 '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0, 155, 183, 0.3)'
                                 }
                              }}
                           >
                              <FaGithub 
                                 style={{ 
                                    color: 'var(--primary-blue)', 
                                    fontSize: '1.2rem',
                                    transition: 'all 0.3s ease'
                                 }} 
                              />
                           </Box>
                        </Box>
                     </motion.div>
                  </Box>

                  {/* Right Side - Chat Interface */}
                  <Box
                     sx={{
                        flex: { xs: 'none', lg: '0 0 50%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: { xs: 'auto', lg: '60vh' },
                        pr: { xs: 2, md: 4, lg: 8 }
                     }}
                  >
                     <motion.div variants={itemVariants}>
                        <ChatInterface />
                     </motion.div>
                  </Box>
               </Box>
            </motion.div>
         </Container>

         {/* Minimal scroll indicator */}
         <motion.div
            style={{
               position: 'absolute',
               bottom: '3rem',
               left: '50%',
               transform: 'translateX(-50%)',
               zIndex: 2
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         >
            <Box
               sx={{
                  width: '1px',
                  height: '50px',
                  background: 'var(--primary-blue)',
                  borderRadius: '1px'
               }}
            />
         </motion.div>
      </Box>
   );
}