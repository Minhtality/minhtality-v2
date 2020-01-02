import React from 'react';
import styled from 'styled-components';

const RightArrow = ({ nextSlide }) => {
  const RightArrow = styled.div`
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  `;
  return <RightArrow className='rightArrow' onClick={nextSlide}></RightArrow>;
};

export default RightArrow;
