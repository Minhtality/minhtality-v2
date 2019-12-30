import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [displayImage, setDisplayImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const handleModalClick = index => event => {
    setDisplayImage(!displayImage);
    setActiveIndex(index);
  };
  return (
    <>
      {displayImage && (
        <div>
          active image: <span>{children[activeIndex]}</span>{' '}
        </div>
      )}

      {children.map((child, index) => (
        <button onClick={handleModalClick(index)}>{child}</button>
      ))}
    </>
  );
};

export default Carousel;
