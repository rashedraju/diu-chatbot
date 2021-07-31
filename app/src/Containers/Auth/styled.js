import styled from 'styled-components';
import authDisplayImg from '../../Assets/auth-bg.svg';
import { AnimatedBorder, contentCenter } from '../../Styled/typography';

export const AuthSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const AuthDisplayWrapper = styled.div`
    width: 60%;
    background-image: radial-gradient(#030a18, #1f1f45);
`;
export const AuthDisplay = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${authDisplayImg});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1rem;
`;

export const AuthContainer = styled.div`
    width: 40%;
    padding: 1rem 5rem;
    ${contentCenter}
`;

export const StyledBorder = styled(AnimatedBorder)`
    margin: 1rem 0;
    width: 100%;
    border-radius: 1.5rem;
`;

export const AuthModeButton = styled.button`
    width: 100%;
    font-size: 1rem;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.color.primary.extraLight};
    color: ${({ theme }) => theme.color.primary.main};
`;
