import styled from 'styled-components';

export default {
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    box-sizing: border-box;
  `,
  ModalContent: styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    .rightArrow {
      position: absolute;
      top: 50%;
      right: 15%;
      z-index: 999;
      cursor: pointer;
    }
    .leftArrow {
      position: absolute;
      top: 50%;
      left: 15%;
      z-index: 999;
      cursor: pointer;
    }
    img {
      position: absolute;
      border: 2px solid black;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      object-fit: cover;
    }
  `,
  ImageGallery: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5em;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    button {
      border: none;
    }
  `
};
