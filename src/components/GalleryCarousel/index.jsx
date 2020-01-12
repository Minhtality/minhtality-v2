import React from 'react';
import Styled from './index.styled';

const GalleryCarousel = ({ slides }) => {
  return (
    <>
      <Styled.GalleryContainer>
        <Styled.GalleryWrapper>
          {slides.map(({ image: { desktop } }, index) => (
            <Styled.ImageButton>
              <Styled.ImageStyle src={desktop.src} alt={desktop.alt} />
            </Styled.ImageButton>
          ))}
        </Styled.GalleryWrapper>
      </Styled.GalleryContainer>
    </>
  );
};

export default GalleryCarousel;
