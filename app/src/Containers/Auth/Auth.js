/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AUTH_MODE_LOGIN, AUTH_MODE_SIGNUP } from '../../Constants';
import { useAuthStore } from '../../Context/authContext';
import { Devider } from '../../Styled/typography';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import {
    AuthContainer,
    AuthDisplay,
    AuthDisplayWrapper, AuthModeButton, AuthSection, StyledBorder
} from './styled';

const Auth = () => {
    const [authMode, setAuthMode] = useState(AUTH_MODE_LOGIN);
    const { isAuthenticated, login, signup, loading, error } = useAuthStore();

    const authModeHandler = () => {
        setAuthMode((prev) => (prev === AUTH_MODE_LOGIN ? AUTH_MODE_SIGNUP : AUTH_MODE_LOGIN));
    };

    return isAuthenticated ? <Redirect to="/chat" /> : (
            <AuthSection>
            <AuthDisplayWrapper>
                <AuthDisplay />
            </AuthDisplayWrapper>
            <AuthContainer>
                {authMode === AUTH_MODE_LOGIN ? <Login onLogin={login} loading={loading} error={error} /> : <Signup onSignup={signup} loading={loading} error={error} />}
                <Devider> or </Devider>
                <StyledBorder>
                    <AuthModeButton onClick={authModeHandler}>
                        {authMode === AUTH_MODE_LOGIN ? 'Create an account' : 'I have an account'}
                    </AuthModeButton>
                </StyledBorder>
            </AuthContainer>
        </AuthSection>
        );
};

export default React.memo(Auth);
