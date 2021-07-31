import styled from 'styled-components';
import { RiWechatPayLine } from 'react-icons/ri';

export const StyledHeader = styled.header`
    font-size: 1.5rem;
    padding: 1rem 0;
    background-color: #fff;
`;

export const StyledHeaderContent = styled.div`
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color.primary.dark};
`;

export const StyledIcon = styled(RiWechatPayLine)`
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 150%;
`;
