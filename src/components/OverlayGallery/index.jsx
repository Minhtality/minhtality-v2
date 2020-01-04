import React from 'react';
import Styled from './index.styled';

const OverlayGallery = ({ slides = [] }) => {
  return (
    <Styled.GalleryContainer>
      <Styled.GridContainer>
        {slides.map(slide => (
          <img src={slide.image.desktop.src} alt='hello?' />
        ))}
      </Styled.GridContainer>
    </Styled.GalleryContainer>
  );
};

export default OverlayGallery;
