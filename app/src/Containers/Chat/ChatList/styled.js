import styled from 'styled-components';

export const ChatListWrapper = styled.div`
    width: 25%;
`;

export const StyledItem = styled.div`
    ${({ active, theme }) =>
        active &&
        `
        background-color: ${theme.color.white};
        color: ${theme.color.primary.main};
        font-weight: bold;
    `};
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;
