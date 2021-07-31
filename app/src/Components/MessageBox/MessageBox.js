import React, { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { MESSAGE_TYPE } from '../../Constants';
import { BotIcon } from '../UI/Icons/Icons';
import { TypingLoader } from '../UI/Loader/Loader';
import {
    HiddenEl,
    Message,
    MessageContainer,
    MessageSender,
    MessageWrapper,
    Reply,
    // eslint-disable-next-line prettier/prettier
    StyledMessageBox
} from './styled';

const MessageBox = ({ messages, loading, error, children }) => {
    const messageBoxRef = useRef(null);

    useEffect(() => {
        console.log('messageBox render');
        messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    });

    const messageEl = messages.map((element) => {
        if (element.type === MESSAGE_TYPE.MESSAGE)
            return <Message key={uuid()}>{element.text}</Message>;
        return (
            <MessageContainer key={uuid()}>
                <MessageSender>
                    <BotIcon />
                </MessageSender>
                <MessageWrapper>
                    {element.map((reply) => (
                        <Reply key={uuid()}>{reply.reply}</Reply>
                    ))}
                </MessageWrapper>
            </MessageContainer>
        );
    });

    return (
        <StyledMessageBox ref={messageBoxRef}>
            <HiddenEl />
            {messageEl}
            {(loading || error) && (
                <MessageContainer key={uuid()}>
                    <MessageSender>
                        <BotIcon />
                    </MessageSender>
                    <MessageWrapper>
                        <Reply key={uuid()}>
                            {loading ? <TypingLoader /> : 'Something want wrong! please try again.'}
                        </Reply>
                    </MessageWrapper>
                </MessageContainer>
            )}

            {children}
        </StyledMessageBox>
    );
};

export default MessageBox;
