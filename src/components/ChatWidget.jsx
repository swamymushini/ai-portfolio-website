import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, TextField, Typography, Chip, Paper, Slide, Fade } from '@mui/material';
import { Send, Close, Chat as ChatIcon } from '@mui/icons-material';
import { sendMessageToGoogleApi } from './GApi';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi, I'm Gopala! You can explore my skills, projects, or ask me anything 🚀", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedResponses = [
    'View Skills',
    'See Projects',
    'Download Resume'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToGoogleApi(inputValue);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting right now. Please try again later.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    if (isOpen) {
      handleSendMessage();
    } else {
      setIsOpen(true);
      // Small delay to allow the chat to open before sending
      setTimeout(handleSendMessage, 300);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
        }}
      >
        <Slide direction="up" in={!isOpen} mountOnEnter unmountOnExit>
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              width: '60px',
              height: '60px',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'scale(1.1)',
                transition: 'all 0.3s ease',
              },
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <ChatIcon fontSize="large" />
          </IconButton>
        </Slide>

        <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
          <Paper
            elevation={10}
            sx={{
              width: '350px',
              maxWidth: '90vw',
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Chat with Gopala 🤖
              </Typography>
              <IconButton
                size="small"
                onClick={() => setIsOpen(false)}
                sx={{ color: 'white' }}
              >
                <Close />
              </IconButton>
            </Box>

            {/* Messages */}
            <Box
              sx={{
                flex: 1,
                p: 2,
                overflowY: 'auto',
                bgcolor: 'background.default',
                '& > *:not(:last-child)': {
                  mb: 2,
                },
              }}
            >
              {messages.map((message, index) => (
                <Fade in={true} key={index}>
                  <Box
                    sx={{
                      maxWidth: '80%',
                      p: 1.5,
                      borderRadius: '12px',
                      bgcolor: message.isUser ? 'primary.main' : 'grey.800',
                      color: message.isUser ? 'white' : 'text.primary',
                      alignSelf: message.isUser ? 'flex-end' : 'flex-start',
                      borderTopLeftRadius: message.isUser ? '12px' : '4px',
                      borderTopRightRadius: message.isUser ? '4px' : '12px',
                      ml: message.isUser ? 'auto' : 0,
                      mr: message.isUser ? 0 : 'auto',
                      wordBreak: 'break-word',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {message.text}
                  </Box>
                </Fade>
              ))}
              {isLoading && (
                <Box
                  sx={{
                    maxWidth: '80%',
                    p: 1.5,
                    borderRadius: '12px',
                    bgcolor: 'grey.800',
                    alignSelf: 'flex-start',
                    display: 'flex',
                    gap: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      bgcolor: 'grey.400',
                      animation: 'pulse 1.5s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 0.4, transform: 'scale(0.8)' },
                        '50%': { opacity: 1, transform: 'scale(1.2)' },
                      },
                      '&:nth-of-type(2)': {
                        animationDelay: '0.2s',
                      },
                      '&:nth-of-type(3)': {
                        animationDelay: '0.4s',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      bgcolor: 'grey.400',
                      animation: 'pulse 1.5s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 0.4, transform: 'scale(0.8)' },
                        '50%': { opacity: 1, transform: 'scale(1.2)' },
                      },
                      '&:nth-of-type(2)': {
                        animationDelay: '0.2s',
                      },
                      '&:nth-of-type(3)': {
                        animationDelay: '0.4s',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      bgcolor: 'grey.400',
                      animation: 'pulse 1.5s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 0.4, transform: 'scale(0.8)' },
                        '50%': { opacity: 1, transform: 'scale(1.2)' },
                      },
                      '&:nth-of-type(2)': {
                        animationDelay: '0.2s',
                      },
                      '&:nth-of-type(3)': {
                        animationDelay: '0.4s',
                      },
                    }}
                  />
                </Box>
              )}
              <div ref={messagesEndRef} />
            </Box>

            {/* Suggested Responses */}
            {messages.length === 1 && (
              <Box
                sx={{
                  p: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  justifyContent: 'flex-start',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                {suggestedResponses.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    sx={{
                      bgcolor: 'grey.800',
                      color: 'text.primary',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </Box>
            )}

            {/* Input */}
            <Box
              sx={{
                p: 1.5,
                borderTop: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type your question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '24px',
                      bgcolor: 'background.paper',
                      '& fieldset': {
                        borderColor: 'divider',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <IconButton
                  color="primary"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    '&:disabled': {
                      bgcolor: 'grey.600',
                    },
                  }}
                >
                  <Send />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Slide>
      </Box>
    </>
  );
};

export default ChatWidget;
