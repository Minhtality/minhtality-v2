import styled from 'styled-components';

export default {
  NavigationBar: styled.div`
    display: flex;
    padding: 25px 25px;
    border: 1px dotted black;
  `,
  NavLogo: styled.div`
    flex: 1;
    font-size: 22px;
    position: relative;
    color: #333;
  `,
  NavLinks: styled.div`
    display: flex;
    flex-direction: row;
    font-size: 22px;

    a {
      text-decoration: none;
      color: #333;
    }
    li {
      list-style: none;
      padding-left: 15px;
    }
  `
};
