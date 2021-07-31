import { AiFillRobot } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

export const IconWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50%;
`;

export const StyledBotIcon = styled(AiFillRobot)`
    color: ${({ theme }) => theme.color.primary.main};
`;

export const StyledPersonIcon = styled(BsFillPersonFill)`
    color: ${({ theme }) => theme.color.primary.main};
`;
