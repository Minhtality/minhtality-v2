import React, { useState, useEffect } from 'react';
import Styled from './index.styled';
import RightArrow from '../ActionIcons/RightArrow';
import LeftArrow from '../ActionIcons/LeftArrow';

const Carousel = ({ children }) => {
  const [displayImage, setDisplayImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  // Retrieve index from clicked image and set active image from the children array
  const handleModalClick = index => event => {
    setDisplayImage(!displayImage);
    setActiveIndex(index);
  };

  const nextSlide = event => {
    setActiveIndex(activeIndex + 1);

    if (event.key === 'ArrowRight') {
      setActiveIndex(activeIndex + 1);
    }
  };
  const prevSlide = () => {
    setActiveIndex(activeIndex - 1);
  };

  // When clicked in overlay zone, toggle modal off

  return (
    <>
      {displayImage && (
        <Styled.ModalOverlay onKeyPress={nextSlide}>
          <Styled.ModalContent>
            <RightArrow nextSlide={nextSlide} />
            <LeftArrow prevSlide={prevSlide} />
            <span>{children[activeIndex]}</span>{' '}
          </Styled.ModalContent>
        </Styled.ModalOverlay>
      )}
      <Styled.ImageGallery>
        {children.map((child, index) => (
          <button onClick={handleModalClick(index)}>{child}</button>
        ))}
      </Styled.ImageGallery>
    </>
  );
};

export default Carousel;
