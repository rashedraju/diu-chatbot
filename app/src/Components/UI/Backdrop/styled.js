import styled from 'styled-components';

export const StyledBackdrop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.color.darkTransparent};
    display: flex;
    justify-content: center;
    align-items: center;
`;
