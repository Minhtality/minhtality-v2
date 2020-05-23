import styled from 'styled-components';
import blackButton from './black.svg';
import whiteButton from './white.svg';
import defaultButton from './default.png';

const CloseButton = styled.button`
    height: ${({size}) => size || '50px'};
    width: ${({size}) => size || '50px'};
    position: relative;
    cursor: pointer;
    border: none;
    display: block;
    padding: 0;
    z-index: 2;
    transition: 0.5s;
    ${props => {
    switch(props.theme) {
      case 'PrimaryBlack':
        return `
          background: url(${blackButton}) no-repeat center center;
          background-size: 15px;
          background-color: #FFF;
          &:hover{
              background-color: #f9f9f9;
          }
        `
      case 'PrimaryWhite':
        return `
          background: url(${whiteButton}) no-repeat center center;
          background-size: 20px;
          background-color: #000;
          &:hover{
              background-color: #333;
          }
        `
      case 'SecondaryBlack':
        return `
          background: url(${blackButton}) no-repeat center center;
          background-size: 15px;
          &:hover{
              background-color: #fff;
          }
        `
      case 'SecondaryWhite':
        return `
          background: url(${whiteButton}) no-repeat center center;
          background-size: 20px;
          &:hover{
              background-color: #777;
          }
        `
      default:
        return `
          background: url(${defaultButton}) no-repeat center center;
          background-size: cover;
        `
    }
  }}
`;





export default CloseButton;