import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from './ChatMessage';

export default function ChatInterface() {
   const [chatInput, setChatInput] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [chatMessages, setChatMessages] = useState([
      {
         id: 1,
         text: "How many years of experience do you have?",
         isUser: true,
         timestamp: new Date(Date.now() - 30000)
      },
      {
         id: 2,
         text: "I have 6+ years of experience in software development, with expertise in backend systems, distributed architectures, and cloud technologies.",
         isUser: false,
         timestamp: new Date(Date.now() - 25000)
      }
   ]);

   const handleSendMessage = async () => {
      if (chatInput.trim()) {
         const userMessage = {
            id: Date.now(),
            text: chatInput.trim(),
            isUser: true,
            timestamp: new Date()
         };
         
         setChatMessages([userMessage]);
         setChatInput('');
         setIsLoading(true);

         try {
            const response = await fetch(`https://my-model-api.vercel.app/api/index?query=${encodeURIComponent(chatInput.trim())}`);
            const data = await response.text();
            
            const botMessage = {
               id: Date.now() + 1,
               text: data,
               isUser: false,
               timestamp: new Date()
            };
            
            setChatMessages([userMessage, botMessage]);
         } catch (error) {
            console.error('Error calling API:', error);
            const errorMessage = {
               id: Date.now() + 1,
               text: "Sorry, I'm having trouble connecting right now. Please try again later.",
               isUser: false,
               timestamp: new Date()
            };
            setChatMessages([userMessage, errorMessage]);
         } finally {
            setIsLoading(false);
         }
      }
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !isLoading) {
         handleSendMessage();
      }
   };

   // Loading message component
   const LoadingMessage = () => (
      <Box
         sx={{
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
         }}
      >
         <Box
            sx={{
               maxWidth: '80%',
               p: 1.5,
               borderRadius: '18px 18px 18px 4px',
               background: 'rgba(0, 155, 183, 0.2)',
               border: '1px solid rgba(0, 155, 183, 0.3)',
               color: 'var(--light-gray)',
               fontSize: '1.05rem',
               lineHeight: 1.4,
               fontWeight: 500,
               fontFamily: 'Inter, Helvetica Neue, sans-serif',
               display: 'flex',
               alignItems: 'center',
               gap: 1
            }}
         >
            <Typography sx={{ fontSize: '0.95rem' }}>Thinking</Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
               {[0, 1, 2].map((i) => (
                  <Box
                     key={i}
                     component={motion.div}
                     animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                     }}
                     transition={{ 
                        duration: 0.8, 
                        repeat: Infinity,
                        delay: i * 0.2
                     }}
                     sx={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-blue)'
                     }}
                  />
               ))}
            </Box>
         </Box>
         <Typography
            sx={{
               fontSize: '0.8rem',
               color: 'var(--medium-gray)',
               mt: 0.5,
               fontFamily: 'Inter, Helvetica Neue, sans-serif'
            }}
         >
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
         </Typography>
      </Box>
   );

   return (
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
            minWidth: { xs: '20rem', md: '30rem' },
            maxWidth: { xs: '100%', md: '37.5rem' },
            width: '100%',
            flexGrow: 1
         }}
      >
         {/* Chat Messages */}
         <Box
            sx={{
               height: 'auto',
               maxHeight: 'none',
               overflow: 'visible',
               mb: 2,
               p: 1
            }}
         >
            {chatMessages.map((message) => (
               <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && <LoadingMessage />}
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
               disabled={isLoading}
               sx={{
                  '& .MuiOutlinedInput-root': {
                     color: 'var(--light-gray)',
                     backgroundColor: 'rgba(255, 255, 255, 0.05)',
                     borderRadius: '30px',
                     fontSize: '1.1rem',
                     height: '60px',
                     '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: '2px',
                        transition: 'all 0.3s ease'
                     },
                     '&:hover fieldset': {
                        borderColor: isLoading ? 'rgba(255, 255, 255, 0.2)' : '#009FB7',
                        borderWidth: isLoading ? '2px' : '3px'
                     },
                     '&.Mui-focused fieldset': {
                        borderColor: '#009FB7',
                        borderWidth: '3px'
                     },
                     '&.Mui-disabled': {
                        opacity: 0.6
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
                        fontSize: '1.2rem'
                     }
                  }
               }}
            />
            <IconButton
               onClick={handleSendMessage}
               disabled={!chatInput.trim() || isLoading}
               sx={{
                  background: !chatInput.trim() || isLoading 
                     ? 'rgba(255, 255, 255, 0.1)' 
                     : 'linear-gradient(135deg, #FE4A49 0%, #FF6B6B 50%, #FE4A49 100%)',
                  color: !chatInput.trim() || isLoading 
                     ? 'var(--medium-gray)' 
                     : 'var(--white)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  boxShadow: !chatInput.trim() || isLoading 
                     ? 'none' 
                     : '0 4px 16px rgba(254, 74, 73, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                     background: !chatInput.trim() || isLoading 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'linear-gradient(135deg, #FF3332 0%, #FF5555 50%, #FF3332 100%)',
                     transform: !chatInput.trim() || isLoading ? 'none' : 'scale(1.05)',
                     boxShadow: !chatInput.trim() || isLoading 
                        ? 'none' 
                        : '0 6px 20px rgba(254, 74, 73, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  },
                  '&:disabled': {
                     background: 'rgba(255, 255, 255, 0.05)',
                     color: 'rgba(255, 255, 255, 0.3)',
                     transform: 'none',
                     boxShadow: 'none'
                  },
                  transition: 'all 0.3s ease',
                  border: !chatInput.trim() || isLoading 
                     ? '1px solid rgba(255, 255, 255, 0.1)' 
                     : '1px solid rgba(254, 74, 73, 0.3)'
               }}
            >
               <SendIcon 
                  sx={{ 
                     fontSize: '1.5rem',
                     fontWeight: 'bold',
                     lineHeight: 1,
                     fontFamily: 'Inter, Helvetica Neue, sans-serif',
                     filter: !chatInput.trim() || isLoading 
                        ? 'none' 
                        : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))'
                  }} 
               />
            </IconButton>
         </Box>
         
         {/* Full Screen Chat Link */}
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'end',
                marginRight: '6rem',
               mt: 2
            }}
         >
            <Typography
               sx={{
                  fontSize: '0.9rem',
                  color: 'var(--medium-gray)',
                  fontFamily: 'Inter, Helvetica Neue, sans-serif',
                  marginTop: '-0.8rem'
               }}
            >
               access the full screen chat{' '}
               <Typography
                  component="a"
                  href="/#/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                     color: 'var(--primary-blue)',
                     textDecoration: 'underline',
                     fontFamily: 'Inter, Helvetica Neue, sans-serif',
                     transition: 'all 0.2s ease',
                     '&:hover': {
                        color: '#FE4A49'
                     }
                  }}
               >
                  here
               </Typography>
            </Typography>
         </Box>
      </Box>
   );
}