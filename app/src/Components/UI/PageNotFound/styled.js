import styled from 'styled-components';

export const StyledPageNotFound = styled.div`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.dark};
    display: flex;
    justify-content: center;
    align-items: center;
`;
