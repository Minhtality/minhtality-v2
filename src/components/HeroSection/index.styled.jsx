import styled from 'styled-components';

export default {
  HeroSection: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  Container: styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5em;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    button {
      border: none;
    }
  `,
  Content: styled.div``
};
