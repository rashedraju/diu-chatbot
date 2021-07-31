import styled, { css, keyframes } from 'styled-components';

export const borderAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const contentCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Contentbox = styled.div`
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color.primary.extraLight};
`;

export const Devider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.color.dark};

    &:after,
    &:before {
        content: '';
        display: block;
        height: 0.1rem;
        width: 50%;
    }

    &:after {
        margin-left: 1rem;
        ${({ theme }) =>
            `background: linear-gradient(to right, ${theme.color.gray}, ${theme.color.light});`}
    }

    &:before {
        margin-right: 1rem;
        ${({ theme }) =>
            `background: linear-gradient(to left, ${theme.color.gray}, ${theme.color.light});`}
    }
`;

export const AnimatedBorder = styled.div`
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
    );
    animation: ${borderAnimation} 3s ease alternate infinite;
    background-size: 300% 300%;
`;
