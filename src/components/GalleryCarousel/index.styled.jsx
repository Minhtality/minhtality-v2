import styled from 'styled-components';

export default {
  GalleryContainer: styled.div`
    max-width: 1440px;
    height: 100%;
    padding: 0 50px 50px 50px;
    margin: 0 auto;
  `,

  GalleryWrapper: styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: auto auto;
  `,

  ImageButton: styled.button`
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    overflow: hidden;
  `,
  ImageStyle: styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  `
};
