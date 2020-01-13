import React from 'react';
import Styled from './index.styled';

const GalleryCarousel = ({ slides }) => {
  const clickHandler = index => () => {
    alert('yeet index' + index);
  };
  return (
    <>
      <Styled.GalleryContainer>
        <Styled.GalleryWrapper>
          {slides.map(({ image: { desktop } }, index) => (
            <Styled.ImageButton onClick={clickHandler(index)}>
              <Styled.ImageStyle src={desktop.src} alt={desktop.alt} />
            </Styled.ImageButton>
          ))}
        </Styled.GalleryWrapper>
      </Styled.GalleryContainer>
    </>
  );
};

export default GalleryCarousel;
