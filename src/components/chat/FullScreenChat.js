import React, { useState, useRef, useEffect } from 'react';
import { 
   Box, 
   Container, 
   Typography, 
   TextField, 
   IconButton, 
   AppBar, 
   Toolbar,
   Button,
   Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { FaCheck } from 'react-icons/fa';

const ChatMessage = ({ message, onCopy }) => {
   const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(message.text);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
         if (onCopy) onCopy();
      } catch (err) {
         console.error('Failed to copy text: ', err);
      }
   };

   const formatTime = (timestamp) => {
      return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   };

   return (
      <Box
         sx={{
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: message.isUser ? 'flex-end' : 'flex-start'
         }}
      >
         <Box
            sx={{
               minWidth: '8rem',
               maxWidth: '70%',
               p: 2,
               borderRadius: message.isUser ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
               background: message.isUser 
                  ? 'rgba(254, 74, 73, 0.15)' 
                  : 'rgba(0, 155, 183, 0.15)',
               border: message.isUser 
                  ? '1px solid rgba(254, 74, 73, 0.3)' 
                  : '1px solid rgba(0, 155, 183, 0.3)',
               color: 'var(--light-gray)',
               fontSize: '1rem',
               lineHeight: 1.5,
               fontFamily: 'Helvetica Neue, Inter, sans-serif',
               backdropFilter: 'blur(10px)'
            }}
         >
            {message.text}
         </Box>
         
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               gap: 1,
               mt: 0.5
            }}
         >
            <Typography
               sx={{
                  fontSize: '0.8rem',
                  color: 'var(--medium-gray)',
                  fontFamily: 'Helvetica Neue, Inter, sans-serif'
               }}
            >
               {formatTime(message.timestamp)}
            </Typography>
            
            {!message.isUser && (
               <Tooltip title={copied ? "Copied!" : "Copy response"}>
                  <IconButton
                     onClick={handleCopy}
                     sx={{
                        width: '18px',
                        height: '18px',
                        color: copied ? 'var(--primary-blue)' : 'var(--medium-gray)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                           color: 'var(--primary-blue)',
                           transform: 'scale(1.1)'
                        }
                     }}
                  >
                     {copied ? (
                        <FaCheck style={{ fontSize: '0.6rem' }} />
                     ) : (
                        <ContentCopyOutlinedIcon sx={{ fontSize: '0.7rem' }} />
                     )}
                  </IconButton>
               </Tooltip>
            )}
         </Box>
      </Box>
   );
};

export default function FullScreenChat() {
   const [chatInput, setChatInput] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [chatMessages, setChatMessages] = useState([
      {
         id: 1,
         text: "Hi! My name is Gopala Swamy. Tell me what you want to know about me?",
         isUser: false,
         timestamp: new Date()
      }
   ]);
   const messagesEndRef = useRef(null);

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(() => {
      scrollToBottom();
   }, [chatMessages]);

   const handleSendMessage = async () => {
      if (chatInput.trim()) {
         const userMessage = {
            id: Date.now(),
            text: chatInput.trim(),
            isUser: true,
            timestamp: new Date()
         };
         
         setChatMessages(prev => [...prev, userMessage]);
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
            
            setChatMessages(prev => [...prev, botMessage]);
         } catch (error) {
            console.error('Error calling API:', error);
            const errorMessage = {
               id: Date.now() + 1,
               text: "Sorry, I'm having trouble connecting right now. Please try again later.",
               isUser: false,
               timestamp: new Date()
            };
            setChatMessages(prev => [...prev, errorMessage]);
         } finally {
            setIsLoading(false);
         }
      }
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
         e.preventDefault();
         handleSendMessage();
      }
   };

   const handleClearChat = () => {
      setChatMessages([
         {
            id: 1,
            text: "Hi! My name is Gopala Swamy. Tell me what you want to know about me?",
            isUser: false,
            timestamp: new Date()
         }
      ]);
   };

   const LoadingMessage = () => (
      <Box
         sx={{
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
         }}
      >
         <Box
            sx={{
               p: 2,
               borderRadius: '20px 20px 20px 6px',
               background: 'rgba(0, 155, 183, 0.15)',
               border: '1px solid rgba(0, 155, 183, 0.3)',
               color: 'var(--light-gray)',
               fontSize: '1rem',
               lineHeight: 1.5,
               fontFamily: 'Helvetica Neue, Inter, sans-serif',
               display: 'flex',
               alignItems: 'center',
               gap: 1,
               backdropFilter: 'blur(10px)'
            }}
         >
            <Typography sx={{ fontSize: '1rem' }}>Thinking</Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
               {[0, 1, 2].map((i) => (
                  <Box
                     key={i}
                     component={motion.div}
                     animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 1, 0.4]
                     }}
                     transition={{ 
                        duration: 1, 
                        repeat: Infinity,
                        delay: i * 0.2
                     }}
                     sx={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-blue)'
                     }}
                  />
               ))}
            </Box>
         </Box>
      </Box>
   );

   return (
      <Box
         sx={{
            minHeight: '100vh',
            background: 'var(--dark-bg)',
            color: 'var(--light-gray)',
            display: 'flex',
            flexDirection: 'column'
         }}
      >
         {/* Header */}
         <AppBar 
            position="static" 
            sx={{ 
               background: 'rgba(0, 0, 0, 0.8)',
               backdropFilter: 'blur(10px)',
               borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
         >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                     onClick={() => window.location.href = '/'}
                     sx={{
                        color: 'var(--light-gray)',
                        '&:hover': {
                           color: 'var(--primary-blue)',
                           background: 'rgba(255, 255, 255, 0.1)'
                        }
                     }}
                  >
                     <ArrowBackIcon />
                  </IconButton>
                  <Typography
                     variant="h6"
                     sx={{
                        fontFamily: 'Helvetica Neue, Inter, sans-serif',
                        fontWeight: 600,
                        color: 'var(--light-gray)'
                     }}
                  >
                     Chat with Gopala Swamy
                  </Typography>
               </Box>
               <Button
                  startIcon={<ClearIcon />}
                  onClick={handleClearChat}
                  sx={{
                     color: 'var(--medium-gray)',
                     textTransform: 'none',
                     fontFamily: 'Helvetica Neue, Inter, sans-serif',
                     '&:hover': {
                        color: 'var(--primary-blue)',
                        background: 'rgba(255, 255, 255, 0.1)'
                     }
                  }}
               >
                  Clear Chat
               </Button>
            </Toolbar>
         </AppBar>

         {/* Chat Messages Container */}
         <Box
            sx={{
               flex: 1,
               overflow: 'hidden',
               display: 'flex',
               flexDirection: 'column'
            }}
         >
            <Container 
               maxWidth="md" 
               sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  py: 3
               }}
            >
               {/* Messages */}
               <Box
                  sx={{
                     flex: 1,
                     overflowY: 'auto',
                     mb: 3,
                     pr: 1,
                     '&::-webkit-scrollbar': {
                        width: '6px'
                     },
                     '&::-webkit-scrollbar-track': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '3px'
                     },
                     '&::-webkit-scrollbar-thumb': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '3px',
                        '&:hover': {
                           background: 'rgba(255, 255, 255, 0.3)'
                        }
                     }
                  }}
               >
                  {chatMessages.map((message) => (
                     <ChatMessage key={message.id} message={message} />
                  ))}
                  {isLoading && <LoadingMessage />}
                  <div ref={messagesEndRef} />
               </Box>

               {/* Input Area */}
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'flex-end',
                     gap: 2,
                     background: 'rgba(255, 255, 255, 0.03)',
                     borderRadius: '20px',
                     p: 1.5,
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
               >
                  <TextField
                     fullWidth
                     multiline
                     maxRows={4}
                     variant="outlined"
                     placeholder="Type your message here..."
                     value={chatInput}
                     onChange={(e) => setChatInput(e.target.value)}
                     onKeyPress={handleKeyPress}
                     disabled={isLoading}
                     sx={{
                        '& .MuiOutlinedInput-root': {
                           color: 'var(--light-gray)',
                           backgroundColor: 'transparent',
                           borderRadius: '15px',
                           fontSize: '1rem',
                           '& fieldset': {
                              border: 'none'
                           },
                           '& textarea': {
                              padding: '12px 16px',
                              fontFamily: 'Helvetica Neue, Inter, sans-serif',
                              '&::placeholder': {
                                 color: 'var(--medium-gray)',
                                 opacity: 1
                              }
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
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        flexShrink: 0,
                        boxShadow: !chatInput.trim() || isLoading 
                           ? 'none' 
                           : '0 4px 16px rgba(254, 74, 73, 0.4)',
                        '&:hover': {
                           background: !chatInput.trim() || isLoading 
                              ? 'rgba(255, 255, 255, 0.1)' 
                              : 'linear-gradient(135deg, #FF3332 0%, #FF5555 50%, #FF3332 100%)',
                           transform: !chatInput.trim() || isLoading ? 'none' : 'scale(1.05)'
                        },
                        '&:disabled': {
                           background: 'rgba(255, 255, 255, 0.05)',
                           color: 'rgba(255, 255, 255, 0.3)'
                        },
                        transition: 'all 0.3s ease'
                     }}
                  >
                     <SendIcon sx={{ fontSize: '1.2rem' }} />
                  </IconButton>
               </Box>
            </Container>
         </Box>
      </Box>
   );
}
