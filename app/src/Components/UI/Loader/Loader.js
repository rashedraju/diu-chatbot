import React from 'react';
import { StyledProcessLoader, TypingLoaderIcon, TypingLoaderWrapper } from './styled';

export const TypingLoader = () => (
    <TypingLoaderWrapper>
        <TypingLoaderIcon />
    </TypingLoaderWrapper>
);

export const ProcessLoader = () => (
    <StyledProcessLoader>
        <div />
        <div />
        <div />
    </StyledProcessLoader>
);
