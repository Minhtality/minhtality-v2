import styled from 'styled-components';

export default {
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  `,
  ModalContent: styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;

    img {
      position: absolute;
      border: 2px solid black;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
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
