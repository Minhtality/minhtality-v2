import React from 'react'
import Styled from './index.styled';

const HeroSection = () => {
    return (
        <>
            <Styled.NavContainer>
                <Styled.NavList>
                    <Styled.NavItems>1</Styled.NavItems>
                    <Styled.NavItems>2</Styled.NavItems>
                    <Styled.NavItems>3</Styled.NavItems>
                    <Styled.NavItems>4</Styled.NavItems>
                </Styled.NavList>
            </Styled.NavContainer>
            <Styled.HeroContainer>
                <Styled.MainContainer></Styled.MainContainer>
                <Styled.SplitContainer></Styled.SplitContainer>
                <Styled.SplitContainer></Styled.SplitContainer>
                <Styled.InnerContainer>
                    <Styled.InnerContent></Styled.InnerContent>
                    <Styled.InnerContent></Styled.InnerContent>
                    <Styled.InnerContent></Styled.InnerContent>
                </Styled.InnerContainer>
            </Styled.HeroContainer>
        </>
    )
}

export default HeroSection
