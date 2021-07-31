import { createContext, useContext, useState } from 'react';
import { BotIcon } from '../Components/UI/Icons/Icons';

const ChatContext = createContext();
export const useChatStore = () => useContext(ChatContext);

const initialChats = [
    {
        id: 1,
        name: 'Chatbot',
        display: <BotIcon />,
        status: 'typically replies instantly',
        active: true,
    },
];

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState(initialChats);
    const [currentChat, setCurrentChat] = useState(initialChats[0]);

    const value = {
        chats,
        currentChat,
        setCurrentChat,
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
