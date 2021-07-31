import styled from 'styled-components';

export const StyledChatBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.color.primary.extraLight};
    border-radius: 1rem;
`;
