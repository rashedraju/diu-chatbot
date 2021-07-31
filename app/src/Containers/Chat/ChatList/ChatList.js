import React from 'react';
import Header from '../../../Components/Header/Header';
import { useChatStore } from '../../../Context/chatContext';
import { Contentbox } from '../../../Styled/typography';
import { ChatListWrapper, StyledItem } from './styled';

const ChatList = () => {
    const { chats, setCurrentChat } = useChatStore();
    return (
        <ChatListWrapper>
            <Header />
            <Contentbox>
                <h3>Chats</h3>
                {chats.map((chat) => (
                    <StyledItem
                        key={chat.id}
                        active={chat.active}
                        onClick={() => setCurrentChat(chat)}
                    >
                        {chat.display}
                        <span>{chat.name}</span>
                    </StyledItem>
                ))}
            </Contentbox>
        </ChatListWrapper>
    );
};

export default ChatList;
