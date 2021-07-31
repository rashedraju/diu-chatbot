import styled from 'styled-components';

export const ChatContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex: 1;
`;
