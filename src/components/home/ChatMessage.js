import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { FaCheck } from 'react-icons/fa';

export default function ChatMessage({ message }) {
   const [copied, setCopied] = useState(false);

   const formatTime = (timestamp) => {
      return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   };

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(message.text);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch (err) {
         console.error('Failed to copy text: ', err);
      }
   };

   return (
      <Box
         sx={{
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: message.isUser ? 'flex-end' : 'flex-start'
         }}
      >
         <Box
            sx={{
               minWidth: '8rem',
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
               fontSize: '1rem',
               lineHeight: 1.4,
               fontFamily: 'Helvetica Neue, Inter, sans-serif'
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
                  fontSize: '0.85rem',
                  color: 'var(--medium-gray)',
                  fontFamily: 'Helvetica Neue, Inter, sans-serif'
               }}
            >
               {formatTime(message.timestamp)}
            </Typography>
            
            {/* Copy Button - Only for AI responses */}
            {!message.isUser && (
               <Tooltip title={copied ? "Copied!" : "Copy response"}>
                  <IconButton
                     onClick={handleCopy}
                     sx={{
                        width: '20px',
                        height: '20px',
                        color: copied ? 'var(--primary-blue)' : 'var(--medium-gray)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                           color: 'var(--primary-blue)',
                           transform: 'scale(1.1)'
                        }
                     }}
                  >
                     {copied ? (
                        <FaCheck style={{ fontSize: '0.7rem' }} />
                     ) : (
                        <ContentCopyOutlinedIcon sx={{ fontSize: '0.8rem' }} />
                     )}
                  </IconButton>
               </Tooltip>
            )}
         </Box>
      </Box>
   );
}