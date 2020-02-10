import styled from 'styled-components';

export default {
  NavigationBar: styled.div`
    display: flex;
    padding: 35px 10%;
  `,
  NavLogo: styled.div`
    flex: 1;
    font-size: 20px;
    position: relative;
    color: #333;
  `,
  NavLinks: styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;

    a {
      text-decoration: none;
      color: #333;
      &:hover {
        color: white;
      }
    }
    li {
      list-style: none;
      padding-left: 15px;
    }
  `
};
