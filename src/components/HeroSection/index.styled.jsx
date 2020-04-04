import styled from 'styled-components';

export default {
  NavContainer: styled.nav`
    color: white;
    margin-bottom: 40px;
    display: block;
    ul {
      grid-auto-flow: column;
      display: grid;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 10px;
      background-color: black;
    }
  `,
  HeroContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    grid-auto-flow: column;
    .item {
      padding: 0;
      background-color: white;
      grid-column: span 2;
      grid-row: span 2;
    }
    section {
      padding: 10px;
    }
    .type-a {
      padding-top: 45%;
      background-color: orange;
    }
    .type-b {
      padding-top: 45%;
      background: blue;
      grid-row: span 1;
    }
    .item-inner {
      padding: 25px 0;
      background-color: black;
      grid-column: span 3;
    }
  `,
  InnerContainer: styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  `,
};
