import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { ChatAppContainer, MessageThread, MessageContainer, Message, UserRow, UserInitials, Username, MessageTime, MessageContentContainer, MessageContent, LikeButton } from './ChatConatiner.Styled';
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const StickyFooter = styled(Footer)`
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const messageThreadRef = useRef(null);

  const handleMessageSend = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: new Date().getTime(),
      username: randomUser,
      message: message,
      likes: 0,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      color: getRandomColor()
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  const handleLikeClick = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === messageId) {
          return { ...message, likes: message.likes + 1 };
        }
        return message;
      })
    );
  };

  useEffect(() => {
    if (messageThreadRef.current) {
      messageThreadRef.current.scrollTop = messageThreadRef.current.scrollHeight;
    }
  }, [messages]);

  const getUserInitials = (username, color) => {
    const initials = username.substr(0, 2).toUpperCase();
    const initialsStyle = {
      backgroundColor: color 
    };
    return <UserInitials style={initialsStyle}>{initials}</UserInitials>;
  };

  const getRandomColor = () => {
    const colors = ['red', 'gray', 'green', 'yellow', 'pink']; 
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ChatAppContainer>
      <MessageThread ref={messageThreadRef}>
        <MessageContainer>
          {messages.map((message) => (
            <Message key={message.id}>
              <UserRow>
                {getUserInitials(message.username, message.color)}
                <Username>{message.username}</Username>
                <MessageTime>{message.time}</MessageTime>
              </UserRow>
              <MessageContentContainer>
                <MessageContent>{message.message}</MessageContent>
                <LikeButton onClick={() => handleLikeClick(message.id)}>
                &#128077;{message.likes}
                </LikeButton>
              </MessageContentContainer>
            </Message>
          ))}
        </MessageContainer>
      </MessageThread>
      <StickyFooter onMessageSend={handleMessageSend} nameSuggestions={user_list}/>
    </ChatAppContainer>
  );
};

export default ChatContainer;

