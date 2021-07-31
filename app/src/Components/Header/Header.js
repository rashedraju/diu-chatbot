import React from 'react';
import { StyledHeader, StyledHeaderContent, StyledIcon } from './styled';

const Header = () => (
    <StyledHeader>
        <StyledHeaderContent>
            <StyledIcon /> &nbsp; <span>DIU-Chatbot</span>
        </StyledHeaderContent>
    </StyledHeader>
);

export default Header;
