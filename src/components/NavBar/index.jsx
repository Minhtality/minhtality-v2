import React from 'react';
import Styled from './index.styled';
import { useMobileBreakpoint } from '../breakpoints';

const NavBar = ({ links }) => {
  return (
    <Styled.NavigationBar>
      <Styled.NavLogo>Minh M. Tran</Styled.NavLogo>
      <Styled.NavLinks>
        {links.map(link => (
          <li>
            <a href="#!">{link}</a>
          </li>
        ))}
      </Styled.NavLinks>
    </Styled.NavigationBar>
  );
};

export default NavBar;
