import styled from 'styled-components';

export const StyledSuggestionBox = styled.div`
    margin: 0.5rem;
    margin-top: 1rem;
    text-align: center;
`;

export const Suggestion = styled.div`
    display: inline-block;
    background: transparent;
    color: ${({ theme }) => theme.color.primary.main};
    margin: 0.2rem;
    padding: 0.2rem 0.5rem;
    word-wrap: break-word;
    text-align: center;
    border-radius: 1rem;
    border: ${({ theme }) => theme.border.primary};
    cursor: pointer;
`;
