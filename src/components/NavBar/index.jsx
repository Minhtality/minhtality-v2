import React from 'react';
import Styled from './index.styled';

const NavBar = () => {
  return (
    <Styled.NavWrapper>
      <Styled.NavContainer>
        <li>Home</li>
        <li>Project</li>
        <li>Gallery</li>
        <li>Resume</li>
      </Styled.NavContainer>
    </Styled.NavWrapper>
  );
};

export default NavBar;
