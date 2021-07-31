import styled, { keyframes } from 'styled-components';

// Typing Loader
const dotTyping = keyframes`
0% {
    box-shadow: 9984px 0 0 0 #18AC4F, 9999px 0 0 0 #18AC4F, 10014px 0 0 0 #18AC4F;
  }
  16.667% {
    box-shadow: 9984px -10px 0 0 #18AC4F, 9999px 0 0 0 #18AC4F, 10014px 0 0 0 #18AC4F;
  }
  33.333% {
    box-shadow: 9984px 0 0 0 #18AC4F, 9999px 0 0 0 #18AC4F, 10014px 0 0 0 #18AC4F;
  }
  50% {
    box-shadow: 9984px 0 0 0 #18AC4F, 9999px -10px 0 0 #18AC4F, 10014px 0 0 0 #18AC4F;
  }
  66.667% {
    box-shadow: 9984px 0 0 0 #18AC4F, 9999px 0 0 0 #18AC4F, 10014px 0 0 0 #18AC4F;
  }
  83.333% {
    box-shadow: 9984px 0 0 0 #18AC4F, 9999px 0 0 0 #18AC4F, 10014px -10px 0 0 #18AC4F;
  }
  100% {
    box-shadow: 9984px 0 0 0 #18AC4F, 9999px 0 0 0 #18AC4F, 10014px 0 0 0 #18AC4F;
  }
`;

export const TypingLoaderWrapper = styled.div`
    padding: 0.8rem 1.5rem;
`;
export const TypingLoaderIcon = styled.div`
    position: relative;
    left: -9999px;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.primary.main};
    box-shadow: 9984px 0 0 0 #18ac4f, 9999px 0 0 0 #18ac4f, 10014px 0 0 0 #18ac4f;
    animation: ${dotTyping} 1.5s infinite linear;
`;

// Process Loader

const procssLoaderAnim1 = keyframes`
  0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;
const procssLoaderAnim2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const procssLoaderAnim3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const StyledProcessLoader = styled.div`
    position: relative;
    width: 80px;
    height: 1.2rem;
    margin: auto;
    div {
        top: 25%;
        left: 25%;
        transform: translate(-25%, -25%);
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);

        &:nth-child(1) {
            left: 8px;
            animation: ${procssLoaderAnim1} 0.6s infinite;
        }
        &:nth-child(2) {
            left: 8px;
            animation: ${procssLoaderAnim2} 0.6s infinite;
        }
        &:nth-child(3) {
            left: 32px;
            animation: ${procssLoaderAnim2} 0.6s infinite;
        }
        &:nth-child(4) {
            left: 56px;
            animation: ${procssLoaderAnim3} 0.6s infinite;
        }
    }
`;
