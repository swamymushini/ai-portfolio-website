import React, { useState, useRef, useEffect } from 'react';
import { styled, keyframes } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import me from '../img/avatar.png';
import { sendMessageToGoogleApi } from './googleApi';

// Colors and gradients
const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;

// Animations
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 255, 164, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 255, 164, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 255, 164, 0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Styled components
const ChatButton = styled('button')({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: gradient,
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease',
  animation: `${pulseAnimation} 2s infinite`,
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const ChatContainer = styled('div')(({ isMaximized }) => ({
  position: 'fixed',
  bottom: '80px',
  right: '20px',
  width: isMaximized ? '80%' : '350px',
  height: isMaximized ? '80%' : '500px',
  maxWidth: '800px',
  maxHeight: '800px',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1E1E1E',
  animation: `${fadeIn} 0.3s ease-out`,
  transition: 'all 0.3s ease',
  zIndex: 9999,
}));

const ChatHeader = styled('div')({
  background: gradient,
  color: 'white',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '16px',
});

const Avatar = styled('img')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '2px solid white',
  objectFit: 'cover',
  marginRight: '10px',
});

const ChatBody = styled('div')({
  flexGrow: 1,
  padding: '15px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#1E1E1E',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

const Message = styled('div')(({ isBot }) => ({
  marginBottom: '11px',
  padding: '12px',
  borderRadius: '18px',
  maxWidth: '80%',
  wordWrap: 'break-word',
  alignSelf: isBot ? 'flex-start' : 'flex-end',
  backgroundColor: isBot ? '#2A2A2A' : 'rgb(166,104,255)',
  color: 'white',
  fontSize: '14px',
  animation: `${fadeIn} 0.3s ease-out`,
  position: 'relative',
}));

const CopyButton = styled('button')({
  position: 'absolute',
  bottom: '-20px',
  right: '0',
  background: 'rgba(255, 255, 255, 0.1)',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const InputArea = styled('div')({
  display: 'flex',
  padding: '12px',
  backgroundColor: '#2A2A2A',
});

const Input = styled('input')({
  flexGrow: 1,
  border: 'none',
  padding: '10px 12px',
  borderRadius: '20px',
  marginRight: '8px',
  backgroundColor: '#3A3A3A',
  color: 'white',
  fontSize: '14px',
});

const SendButton = styled('button')({
  background: 'rgb(0,255,164)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const HeaderButtons = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const HeaderButton = styled('button')({
  background: 'transparent',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

// Typing Indicator Styles
const TypingIndicator = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Dot = styled('span')({
  display: 'block',
  width: '5px',
  height: '5px',
  margin: '0 4px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  animation: `${typingAnimation} 1s infinite`,
  '&:nth-child(2)': {
    animationDelay: '0.2s',
  },
  '&:nth-child(3)': {
    animationDelay: '0.4s',
  },
});

const AttentionMessage = styled('div')({
  position: 'absolute',
  bottom: '60px',
  right: '70px',
  backgroundColor: 'white',
  color: '#1E1E1E',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  maxWidth: '250px',
  animation: `${bounceAnimation} 1s infinite, ${fadeIn} 0.3s ease-out`,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    right: '20px',
    border: '10px solid transparent',
    borderTopColor: 'white',
  },
});

const attentionMessages = [
  "Hey, I'm Gopal! Click to chat with me.",
  "Got questions? I'm here to help!",
  "If you are a recruiter and wants to know more about me?. Click me!",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [attentionMessage, setAttentionMessage] = useState('');
  const [showAttentionMessage, setShowAttentionMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hi, I'm Gopala. How can I assist you today?", isBot: true }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      const messageInterval = setInterval(() => {
        const randomMessage = attentionMessages[Math.floor(Math.random() * attentionMessages.length)];
        setAttentionMessage(randomMessage);
        setShowAttentionMessage(true);
        
        setTimeout(() => setShowAttentionMessage(false), 5000);
      }, 15000);

      return () => clearInterval(messageInterval);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input.trim(), isBot: false };
      setMessages([...messages, userMessage]);
  
      setInput('');
  
      const typingMessage = { text: '...', isBot: true };
      setMessages((prevMessages) => [...prevMessages, typingMessage]);
  
      const response = await sendMessageToGoogleApi(input.trim());
  
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        const typingIndex = newMessages.findIndex((msg) => msg.isBot && msg.text === '...');
        if (typingIndex !== -1) {
          newMessages[typingIndex] = { text: response, isBot: true };
        }
        return newMessages;
      });
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowAttentionMessage(false);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    });
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        {showAttentionMessage && (
          <AttentionMessage>{attentionMessage}</AttentionMessage>
        )}
        {!isOpen && (
          <ChatButton onClick={toggleChat}>
            <ChatIcon fontSize="small" />
          </ChatButton>
        )}
      </div>
      {isOpen && (
        <ChatContainer isMaximized={isMaximized}>
          <ChatHeader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={me} alt="Profile" />
              <div>I'm Gopal</div>
            </div>
            <HeaderButtons>
              <HeaderButton onClick={toggleMaximize}>
                {isMaximized ? <CloseFullscreenIcon fontSize="small" /> : <OpenInFullIcon fontSize="small" />}
              </HeaderButton>
              <HeaderButton onClick={() => setIsOpen(false)}>
                <CloseIcon fontSize="small" />
              </HeaderButton>
            </HeaderButtons>
          </ChatHeader>
          <ChatBody>
            {messages.map((message, index) => (
              <Message key={index} isBot={message.isBot}>
                {message.text === '...' ? (
                  <TypingIndicator>
                    <Dot></Dot>
                    <Dot></Dot>
                    <Dot></Dot>
                  </TypingIndicator>
                ) : (
                  <>
                    {message.text}
                    {message.isBot && (
                      <CopyButton onClick={() => copyToClipboard(message.text)}>
                        <ContentCopyIcon fontSize="small" />
                      </CopyButton>
                    )}
                  </>
                )}
              </Message>
            ))}
            <div ref={messagesEndRef} />
          </ChatBody>
          <InputArea>
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              disabled={buttonDisabled}
            />
            <SendButton
              onClick={handleSend}
              disabled={buttonDisabled}
            >
              <SendIcon />
            </SendButton>
          </InputArea>
        </ChatContainer>
      )}
    </>
  );
};

export default ChatBot;