import React from 'react';
import { useChatStore } from '../../../Context/chatContext';
import {
    ChatProfileWrapper,
    IconBorder,
    StyledChatProfile,
    UserIconWrapper,
    // eslint-disable-next-line prettier/prettier
    UserProfileToggle
} from './styled';

const ChatProfile = () => {
    const { currentChat } = useChatStore();
    return (
        <ChatProfileWrapper>
            <StyledChatProfile>
                <IconBorder>
                    <UserIconWrapper>{currentChat.display}</UserIconWrapper>
                </IconBorder>
                <h4> {currentChat.name} </h4>
                <small> {currentChat.status} </small>
            </StyledChatProfile>
            <UserProfileToggle bottom />
        </ChatProfileWrapper>
    );
};

export default ChatProfile;
