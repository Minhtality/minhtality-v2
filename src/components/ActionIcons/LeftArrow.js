import React from 'react';
import styled from 'styled-components';

const LeftArrow = ({ prevSlide }) => {
  const RightArrow = styled.div`
    border: solid white;
    border-width: 3px 0px 0px 3px;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  `;
  return (
    <RightArrow className='arrow leftArrow' onClick={prevSlide}></RightArrow>
  );
};

export default LeftArrow;
