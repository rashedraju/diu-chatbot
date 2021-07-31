import React from 'react';
import Chatbox from './ChatBox/ChatBox';
import ChatList from './ChatList/ChatList';
import ChatProfile from './ChatProfile/ChatProfile';
import { ChatContainer } from './styled';

const Chat = () => (
    <>
        <ChatContainer>
            <ChatList />
            <Chatbox />
            <ChatProfile />
        </ChatContainer>
    </>
);

export default Chat;
