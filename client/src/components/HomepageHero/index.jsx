import React from 'react';
import * as Styled from './index.styled';

const HomepageHero = ({
    id,
    heading,
    description,
    heroImage,
    cta
}) => {
    return (
        <Styled.HeroContainer>
            <Styled.ImageContainer src={heroImage.desktop.src} alt={heroImage.desktop.src} />
            <Styled.CopyContainer>
                <Styled.Heading>{heading}</Styled.Heading>
                <Styled.Description>{description}</Styled.Description>
                <div>{JSON.stringify(cta)}</div>
            </Styled.CopyContainer>
        </Styled.HeroContainer>
    )
}

export default HomepageHero;
