import styled from 'styled-components';
import ProfileToggle from '../../../Components/ProfileToggle/ProfileToggle';
import { AnimatedBorder, Contentbox, contentCenter } from '../../../Styled/typography';

export const ChatProfileWrapper = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const StyledChatProfile = styled(Contentbox)`
    ${contentCenter}
`;

export const IconBorder = styled(AnimatedBorder)`
    border-radius: 50%;
`;

export const UserIconWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.white};
    ${contentCenter}
`;

export const UserProfileToggle = styled(ProfileToggle)`
    margin-top: auto;
`;
