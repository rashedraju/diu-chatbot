import styled, { keyframes } from 'styled-components';

const anim = keyframes`
0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
`;

export const Text = styled.h1`
    font-size: 300%;
    ${({ theme }) =>
        `background: linear-gradient(${theme.color.primary.light}, ${theme.color.primary.main});`}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::after {
        content: '|';
        font-weight: 300;
        animation: ${anim} 1s infinite;
    }
`;
