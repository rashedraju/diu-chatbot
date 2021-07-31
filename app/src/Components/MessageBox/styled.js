import styled, { keyframes } from 'styled-components';

const messageSlideUp = keyframes`
    from {
    transform: translateY(2rem);
  }
  to {
    transform: none;
  }
`;

export const StyledMessageBox = styled.div`
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
`;

export const MessageContainer = styled.div`
    display: flex;
    animation: ${messageSlideUp} 0.3s ease;
`;

export const MessageSender = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const MessageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const BaseMessage = styled.div`
    max-width: 75%;
    margin: 0.3rem;
    padding: 0.2rem 0.5rem;
    word-wrap: break-word;
    border-radius: 1.5rem;
`;

export const Message = styled(BaseMessage)`
    align-self: end;
    background-color: ${({ theme }) => theme.color.primary.main};
    color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.primary};
    animation: ${messageSlideUp} 0.3s ease;
`;

export const Reply = styled(BaseMessage)`
    align-self: start;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.sm};
`;

export const HiddenEl = styled.div`
    visibility: hidden;
    opacity: 0;
    margin-top: auto;
`;
