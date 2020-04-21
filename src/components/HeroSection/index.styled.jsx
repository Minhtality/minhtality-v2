import styled from 'styled-components';

const Section = styled.section`
  padding: 0;
  background-color: white;
  grid-column: span 2;
  grid-row: span 2;
`;

export default {
  Section,
  NavContainer: styled.nav`
    color: #000;
    margin-bottom: 40px;
    display: block;
  `,
  NavList: styled.ul`
    grid-auto-flow: column;
    display: grid;
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  NavItems: styled.li`
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
  `,
  HeroContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    grid-auto-flow: column;
  `,
  MainContainer: styled(Section)`
    padding-top: 45%;
    background-color: orange;
  `,
  SplitContainer: styled(Section)`
    padding-top: 45%;
    background: blue;
    grid-row: span 1;
  `,
  InnerContainer: styled(Section)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  `,
  InnerContent: styled(Section)`
    background-color: black;
    grid-column: span 3;
  `,
};
