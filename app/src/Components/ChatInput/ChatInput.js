import React, { useRef } from 'react';
import { Form, Inputbox, SendBtn, SendIcon } from './styled';

const ChatInput = ({ submitMessage }) => {
    const sendBtnRef = useRef(null);
    const inputboxRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        submitMessage(inputboxRef.current.value);
        inputboxRef.current.value = '';
    };

    const InputboxChangeHandler = (e) => {
        sendBtnRef.current.disabled = e.target.textLength < 1;

        if (e.target.scrollHeight <= 76) {
            e.target.style.maxHeight = `${e.target.scrollHeight + 2}px`;
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            submitHandler(event);
        }
    };

    return (
        <Form onSubmit={submitHandler}>
            <Inputbox
                ref={inputboxRef}
                onChange={InputboxChangeHandler}
                onKeyPress={handleKeyPress}
                autoFocus
            />
            <SendBtn disabled ref={sendBtnRef}>
                <SendIcon />
            </SendBtn>
        </Form>
    );
};

export default ChatInput;
