import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedBorder } from '../../Styled/typography';

export const StyledHome = styled.section`
    width: 100%;
    height: 100vh;
    padding-left: 2rem;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
    height: 10%;
`;

export const HomeContent = styled.div`
    display: flex;
    height: 90%;
`;

export const HeroWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export const HeroText = styled.div`
    width: 100%;
    min-height: 35%;
`;

export const ActionBtnWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: inline-block;
`;

export const ActionBtnBorder = styled(AnimatedBorder)`
    border-radius: 2.5rem;
`;

export const ActionBtn = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    width: 14.5rem;
    height: 3.5rem;
    border-radius: 2.5rem;
    background: ${({ theme }) => theme.color.primary.extraLight};
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 2rem;
`;

export const ShowcaseWrapper = styled.div`
    width: 50%;
    display: flex;
`;

export const Showcase = styled.div.attrs({ disabled: true })`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 5rem;

    video {
        height: 90%;
        border: ${({ theme }) => theme.border.lg};
        border-radius: 1.5rem 1.5rem 0 0;
        border-bottom: none;
    }
`;
