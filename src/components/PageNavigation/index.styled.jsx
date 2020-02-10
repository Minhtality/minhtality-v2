import styled from 'styled-components';

export default {
  NavContainer: styled.div`
    width: ${props => (props.fullWidth ? '100%' : '80%')};
    margin: 0 auto;
  `,
  NavigationBar: styled.div`
    display: flex;
    ${props =>
      props.theme === 'dark'
        ? 'background: #333;color:#fff'
        : 'background: #fff; color: #333'}
  `,
  NavLogo: styled.div`
    flex: 1;
    font-size: 20px;
    position: relative;
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
