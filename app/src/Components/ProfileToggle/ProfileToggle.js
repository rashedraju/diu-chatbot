import React from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { useAuthStore } from '../../Context/authContext';
import { PersonIcon } from '../UI/Icons/Icons';
import { ProcessLoader } from '../UI/Loader/Loader';
import { LogoutBtn, ToggleMenu, Wrapper } from './styled';

const ProfileToggle = ({ bottom }) => {
    const { userData, loading, logout } = useAuthStore();
    return (
        <Wrapper bottom={bottom}>
            <PersonIcon />
            <strong>{userData.username}</strong>
            <BiCaretDown />
            <ToggleMenu>
                <LogoutBtn onClick={logout}> {loading ? <ProcessLoader /> : 'Logout'} </LogoutBtn>
            </ToggleMenu>
        </Wrapper>
    );
};

export default ProfileToggle;
