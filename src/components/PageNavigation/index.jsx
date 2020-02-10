import React from 'react';
import Styled from './index.styled';

const NavBar = ({
  position = 'default',
  fullWidth = false,
  theme,
  logo,
  links = []
}) => {
  return (
    <Styled.NavContainer fullWidth={fullWidth}>
      <Styled.NavigationBar theme={theme}>
        <Styled.NavLogo>{logo.desktop.text}</Styled.NavLogo>
        <Styled.NavLinks>
          {links.map(link => (
            <li key={link}>{link}</li>
          ))}
        </Styled.NavLinks>
      </Styled.NavigationBar>
    </Styled.NavContainer>
  );
};

export default NavBar;
