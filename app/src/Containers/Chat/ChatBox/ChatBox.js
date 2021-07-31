// import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../../axios';
import ChatInput from '../../../Components/ChatInput/ChatInput';
import MessageBox from '../../../Components/MessageBox/MessageBox';
import SuggestionBox from '../../../Components/SuggestionBox/SuggestionBox';
import { API_CHAT_URL, MESSAGE_TYPE } from '../../../Constants';
import { useAuthStore } from '../../../Context/authContext';
import { StyledChatBox } from './styled';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { accessToken } = useAuthStore();

    const sendMessage = useCallback(
        async (query = '') => {
            setLoading(true);
            setError(false);
            setSuggestions([]);
            const body = {
                question: query,
            };

            try {
                const response = await axios.post(API_CHAT_URL, body, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
                // Add messages to state
                if (response.data.messages) {
                    setMessages((prevState) => [...prevState, response.data.messages]);
                }

                if (response.data.suggestions) {
                    setSuggestions((prevState) => [...prevState, ...response.data.suggestions]);
                }

                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError(true);
            }
        },
        [accessToken]
    );

    useEffect(() => {
        sendMessage();
    }, [sendMessage]);

    const submitMessageHandler = (value) => {
        setMessages((prevState) => [...prevState, { type: MESSAGE_TYPE.MESSAGE, text: value }]);
        sendMessage(value);
    };
    return (
        <StyledChatBox>
            <MessageBox messages={messages} loading={loading} error={error}>
                <SuggestionBox suggestions={suggestions} submitMessage={submitMessageHandler} />
            </MessageBox>
            <ChatInput submitMessage={submitMessageHandler} />
        </StyledChatBox>
    );
};

export default React.memo(ChatBox);
