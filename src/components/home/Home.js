import React, { useState } from 'react';
import me from '../../img/IMG_2567124.jpg';
import { Box, Container, Typography, TextField, IconButton } from "@mui/material";
import { info } from "../../info/Info";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from 'react-icons/fa';
import SendIcon from '@mui/icons-material/Send';

export default function Home({ innerRef }) {
   const { scrollYProgress } = useScroll();
   const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
   const [chatInput, setChatInput] = useState('');
   const [chatMessages, setChatMessages] = useState([
      {
         id: 1,
         text: "How many years of experience do you have?",
         isUser: true,
         timestamp: new Date(Date.now() - 30000) // 30 seconds ago
      },
      {
         id: 2,
         text: "I have 6+ years of experience in software development, with expertise in backend systems, distributed architectures, and cloud technologies.",
         isUser: false,
         timestamp: new Date(Date.now() - 25000) // 25 seconds ago
      }
   ]);

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

   const handleSendMessage = async () => {
      if (chatInput.trim()) {
         const userMessage = {
            id: 1,
            text: chatInput.trim(),
            isUser: true,
            timestamp: new Date()
         };
         
         // Clear previous messages and show only user message
         setChatMessages([userMessage]);
         setChatInput('');

         try {
            // Call your API
            const response = await fetch(`https://my-model-api.vercel.app/api/index?query=${encodeURIComponent(chatInput.trim())}`);
            const data = await response.text();
            
            // Add bot response
            const botMessage = {
               id: 2,
               text: data,
               isUser: false,
               timestamp: new Date()
            };
            
            setChatMessages([userMessage, botMessage]);
         } catch (error) {
            console.error('Error calling API:', error);
            // Add error response
            const errorMessage = {
               id: 2,
               text: "Sorry, I'm having trouble connecting right now. Please try again later.",
               isUser: false,
               timestamp: new Date()
            };
            setChatMessages([userMessage, errorMessage]);
         }
      }
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         handleSendMessage();
      }
   };

   const formatTime = (timestamp) => {
      return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               style={{ y, opacity }}
            >
               <Box
                  sx={{
                     textAlign: 'left',
                     maxWidth: '900px',
                     mx: 0,
                     pl: { xs: 2, md: 4, lg: 8 }
                  }}
               >
                  {/* Name - Large, Bold Typography */}
                  <motion.div variants={itemVariants}>
                     <Typography
                        variant="h1"
                        sx={{
                           fontSize: { xs: '2.5rem', md: '3.5rem', lg: '5rem' },
                           fontWeight: 900,
                           mb: 4,
                           color: 'var(--light-gray)',
                           letterSpacing: '-0.02em',
                           lineHeight: 0.9,
                           fontFamily: 'Helvetica Neue, Inter, sans-serif',
                           textTransform: 'uppercase'
                        }}
                     >
                        GOPALA SWAMY
                     </Typography>
                     <Typography
                        variant="h2"
                        sx={{
                           fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
                           fontWeight: 300,
                           mb: 4,
                           color: 'var(--light-gray)',
                           letterSpacing: '-0.01em',
                           lineHeight: 1,
                           fontFamily: 'Helvetica Neue, Inter, sans-serif',
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
                           fontSize: { xs: '1.125rem', md: '1.25rem' },
                           lineHeight: 1.7,
                           color: 'var(--medium-gray)',
                           maxWidth: '700px',
                           mb: 4,
                           fontWeight: 300,
                           fontFamily: 'Helvetica Neue, Inter, sans-serif',
                           letterSpacing: '0.01em'
                        }}
                     >
                        I'm a backend-focused software engineer with 6 years of experience building scalable, 
                        distributed systems. Currently working at Rocket Software. Let's build something impactful.
                     </Typography>
                  </motion.div>

                  {/* Current Role */}
                  <motion.div variants={itemVariants}>
                     <Typography
                        variant="h2"
                        sx={{
                           fontSize: { xs: '1.25rem', md: '1.5rem' },
                           fontWeight: 400,
                           mb: 4,
                           color: 'var(--primary-blue)',
                           letterSpacing: '0.1em',
                           textTransform: 'uppercase',
                           fontFamily: 'Helvetica Neue, Inter, sans-serif'
                        }}
                     >
                        Senior Software Engineer
                     </Typography>
                  </motion.div>

                  {/* Contact Links with Icons */}
                  <motion.div variants={itemVariants}>
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           gap: 1,
                           mb: 6
                        }}
                     >
                        {/* Email */}
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2
                           }}
                        >
                           <Typography
                              component="a"
                              href="mailto:swamymushini@gmail.com"
                              sx={{
                                 fontSize: '0.95rem',
                                 color: 'var(--light-gray)',
                                 textDecoration: 'none',
                                 fontWeight: 400,
                                 fontFamily: 'Helvetica Neue, Inter, sans-serif',
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
                              gap: 2
                           }}
                        >
                           <Typography
                              component="a"
                              href="tel:+919553307417"
                              sx={{
                                 fontSize: '0.95rem',
                                 color: 'var(--light-gray)',
                                 textDecoration: 'none',
                                 fontWeight: 400,
                                 fontFamily: 'Helvetica Neue, Inter, sans-serif',
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

                        {/* Resume, Cover Letter, and Chat Input Row */}
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 4,
                              mt: 2,
                              flexWrap: { xs: 'wrap', md: 'nowrap' }
                           }}
                        >
                           <Box
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 4,
                                 flexShrink: 0
                              }}
                           >
                              <Typography
                                 component="a"
                                 href="/resume"
                                 sx={{
                                    fontSize: '0.95rem',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'underline',
                                    fontWeight: 400,
                                    fontFamily: 'Helvetica Neue, Inter, sans-serif',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                       color: 'var(--primary-blue)'
                                    }
                                 }}
                              >
                                 Resume
                              </Typography>
                              <Typography
                                 component="a"
                                 href="/coverletter"
                                 sx={{
                                    fontSize: '0.95rem',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'underline',
                                    fontWeight: 400,
                                    fontFamily: 'Helvetica Neue, Inter, sans-serif',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                       color: 'var(--primary-blue)'
                                    }
                                 }}
                              >
                                 Cover Letter
                              </Typography>
                           </Box>

                           {/* Chat Input Box */}
                           <Box
                              component={motion.div}
                              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                              transition={{ 
                                 duration: 0.8, 
                                 delay: 0.5, 
                                 ease: [0.16, 1, 0.3, 1] 
                              }}
                              sx={{
                                 position: 'relative',
                                 minWidth: { xs: '100%', md: '500px' },
                                 maxWidth: { xs: '100%', md: '600px' },
                                 flexGrow: 1
                              }}
                           >
                              {/* Chat Messages */}
                              <Box
                                 sx={{
                                    maxHeight: '200px',
                                    overflowY: 'auto',
                                    mb: 2,
                                    p: 1,
                                    '&::-webkit-scrollbar': {
                                       width: '4px'
                                    },
                                    '&::-webkit-scrollbar-track': {
                                       background: 'rgba(255, 255, 255, 0.05)',
                                       borderRadius: '2px'
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                       background: 'rgba(255, 255, 255, 0.2)',
                                       borderRadius: '2px'
                                    }
                                 }}
                              >
                                 {chatMessages.map((message) => (
                                    <Box
                                       key={message.id}
                                       sx={{
                                          mb: 2,
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: message.isUser ? 'flex-end' : 'flex-start'
                                       }}
                                    >
                                       <Box
                                          sx={{
                                             maxWidth: '80%',
                                             p: 1.5,
                                             borderRadius: message.isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                             background: message.isUser 
                                                ? 'rgba(254, 74, 73, 0.2)' 
                                                : 'rgba(0, 155, 183, 0.2)',
                                             border: message.isUser 
                                                ? '1px solid rgba(254, 74, 73, 0.3)' 
                                                : '1px solid rgba(0, 155, 183, 0.3)',
                                             color: 'var(--light-gray)',
                                             fontSize: '0.85rem',
                                             lineHeight: 1.4,
                                             fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                          }}
                                       >
                                          {message.text}
                                       </Box>
                                       <Typography
                                          sx={{
                                             fontSize: '0.7rem',
                                             color: 'var(--medium-gray)',
                                             mt: 0.5,
                                             fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                          }}
                                       >
                                          {formatTime(message.timestamp)}
                                       </Typography>
                                    </Box>
               ))}
            </Box>

                              <Box
                                 sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2
                                 }}
                              >
                                 <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Explore my portfolio or ask me anything…"
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    sx={{
                                       '& .MuiOutlinedInput-root': {
                                          color: 'var(--light-gray)',
                                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                          borderRadius: '30px',
                                          fontSize: '1rem',
                                          height: '60px',
                                          '& fieldset': {
                                             borderColor: 'rgba(255, 255, 255, 0.2)',
                                             borderWidth: '2px',
                                             transition: 'all 0.3s ease'
                                          },
                                          '&:hover fieldset': {
                                             borderColor: '#009FB7',
                                             borderWidth: '3px'
                                          },
                                          '&.Mui-focused fieldset': {
                                             borderColor: '#009FB7',
                                             borderWidth: '3px'
                                          },
                                          '& input': {
                                             paddingLeft: '25px',
                                             paddingRight: '25px',
                                             paddingTop: '18px',
                                             paddingBottom: '18px'
                                          },
                                          '& input::placeholder': {
                                             color: 'var(--medium-gray)',
                                             opacity: 1,
                                             fontSize: '1rem'
                                          }
                                       }
                                    }}
                                 />
                                 <IconButton
                                    onClick={handleSendMessage}
                                    disabled={!chatInput.trim()}
                                    sx={{
                                       background: '#FE4A49',
                                       color: 'var(--white)',
                                       width: '60px',
                                       height: '60px',
                                       borderRadius: '50%',
                                       flexShrink: 0,
                                       '&:hover': {
                                          background: '#FE4A49',
                                          transform: 'scale(1.05)',
                                          boxShadow: '0 6px 16px rgba(254, 74, 73, 0.4)'
                                       },
                                       '&:disabled': {
                                          background: 'rgba(255, 255, 255, 0.1)',
                                          color: 'var(--medium-gray)',
                                          transform: 'none'
                                       },
                                       transition: 'all 0.3s ease'
                                    }}
                                 >
                                    <SendIcon 
                                       sx={{ 
                                          fontSize: '1.5rem',
                                          fontWeight: 'bold',
                                          lineHeight: 1,
                                          fontFamily: 'Helvetica Neue, Inter, sans-serif'
                                       }} 
                                    />
                                 </IconButton>
                              </Box>
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
                           gap: 3,
                           mb: 10
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
                                 background: 'var(--primary-blue)',
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
                                 background: 'var(--primary-blue)',
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