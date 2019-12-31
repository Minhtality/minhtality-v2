import React, { useState } from 'react';
import Styled from './index.styled';

const Carousel = ({ children }) => {
  const [displayImage, setDisplayImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  // Retrieve index from clicked image and set active image from the children array
  const handleModalClick = index => event => {
    setDisplayImage(!displayImage);
    setActiveIndex(index);
  };
  // When clicked in overlay zone, toggle modal off
  const exitModal = event => {
    event.stopPropagation();
    setDisplayImage(!displayImage);
  };
  return (
    <>
      {displayImage && (
        <Styled.ModalOverlay onClick={exitModal}>
          <Styled.ModalContent>
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
