import React from 'react'
import Styled from './index.styled';

const HeroSection = () => {
    return (
        <>
            <Styled.NavContainer>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Styled.NavContainer>
            <Styled.HeroContainer>
                <section className='item type-a'></section>
                <section className='item type-b'></section>
                <section className='item type-b'></section>
                <Styled.InnerContainer className='item'>
                    <section className='item-inner'></section>
                    <section className='item-inner'></section>
                    <section className='item-inner'></section>
                    <section className='item-inner'></section>
                    <section className='item-inner'></section>
                </Styled.InnerContainer>
            </Styled.HeroContainer>
        </>
    )
}

export default HeroSection
