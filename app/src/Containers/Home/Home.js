/* eslint-disable prettier/prettier */
import React from 'react';
import chatPreviewImg from '../../Assets/chat-preview.png';
import chatPreviewVideo from '../../Assets/chat_preview.mp4';
import Header from '../../Components/Header/Header';
import ProfileToggle from '../../Components/ProfileToggle/ProfileToggle';
import WriteTextAnim from '../../Components/WriteTextAnim/WriteTextAnim';
import { useAuthStore } from '../../Context/authContext';
import {
    ActionBtn, ActionBtnBorder, ActionBtnWrapper, HeaderWrapper, HeroText,
    HeroWrapper, HomeContent, Showcase,
    ShowcaseWrapper, StyledHome
} from './styled';


const Home = () => {
    const { isAuthenticated } = useAuthStore();
    return (
    <StyledHome>
        <HeaderWrapper>
            <Header />
            {!!isAuthenticated && <ProfileToggle />}
        </HeaderWrapper>
        <HomeContent>
            <HeroWrapper>
                <HeroText>
                    <WriteTextAnim text="Litle help? i can answer the most common questions." />
                </HeroText>
                <ActionBtnWrapper>
                    <ActionBtnBorder>
                        <ActionBtn to={isAuthenticated ? "/chat" : "/auth"}>Ask me</ActionBtn>
                    </ActionBtnBorder>
                </ActionBtnWrapper>
            </HeroWrapper>
            <ShowcaseWrapper>
            <Showcase>
                <video src={chatPreviewVideo} autoPlay loop>
                    <track kind="captions" />
                    <img src={chatPreviewImg} title="Your browser does not support the video" alt="Your browser does not support the video" />
                </video>
                </Showcase>
            </ShowcaseWrapper>
        </HomeContent>
    </StyledHome>
)};

export default Home;
