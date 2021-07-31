import styled, { css } from 'styled-components';
import { contentCenter } from '../../Styled/typography';

const bottomToggleHidden = css`
    top: 0;
    right: unset;
`;

const bottomToggleShow = css`
    top: -125%;
`;

export const ToggleMenu = styled.div`
    width: 8rem;
    height: 5rem;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    background: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.border.sm};
    ${contentCenter};
`;

export const LogoutBtn = styled.button`
    width: 100%;
    border: none;
    text-align: center;
    cursor: pointer;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.dark};
    &:hover {
        background: ${({ theme }) => theme.color.light};
    }
`;

export const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
    position: relative;

    ${ToggleMenu} {
        ${({ bottom }) => bottom && bottomToggleHidden};
    }

    &:hover ${ToggleMenu} {
        top: 100%;
        opacity: 1;
        visibility: visible;
        ${({ bottom }) => bottom && bottomToggleShow};
    }
`;
