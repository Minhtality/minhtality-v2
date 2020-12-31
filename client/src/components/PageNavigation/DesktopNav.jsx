import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types';
import Styled from './index.styled';

const DesktopNav = ({
    title = 'Home',
    theme = 'LightMode',
    icon
}) => {
    const navRef = useRef(null);
    const [showDropdown, setDropdown] =  useState(false);
    const toggleDropdown = () => {
        setDropdown(!showDropdown);
    };
    const closeDropdown = (e) => {
        if(navRef.current && !navRef.current.contains(e.target)){
            setDropdown(false);
        };
    };

    useEffect(() => {
        window.addEventListener('click', closeDropdown, false);
        return () => {
            document.removeEventListener('click', closeDropdown, false)
        }
    });

    return (
        <Styled.DesktopNav ref={navRef}>
            <Styled.NavContainer>
                <Styled.LeftSection>
                    <Styled.Title onClick={closeDropdown}>シ</Styled.Title>
                    <Styled.Links>
                        <li>
                            <Styled.Link to="/">Home</Styled.Link>
                        </li>
                        <Styled.Dropdown onClick={toggleDropdown}>
                            <li>Projects</li>
                            {showDropdown && 
                                <Styled.DropdownList>
                                    <Styled.Link to="/pokemon">Pokemon</Styled.Link>
                                    <Styled.Link to="/contacts">Contacts</Styled.Link>
                                </Styled.DropdownList>
                            }
                        </Styled.Dropdown>
                    </Styled.Links>
                </Styled.LeftSection>
                <Styled.RightSection>
                    <div><Styled.Link to="/login">Login</Styled.Link></div>
                </Styled.RightSection>
            </Styled.NavContainer>
        </Styled.DesktopNav>
    )
};

DesktopNav.propTypes = {
    /** Page Title */
    title: PropTypes.string,
    /** Navigation bar theme */
    theme: PropTypes.oneOf(['DarkMode','LightMode']),
    /** Site's icon/logo */
    icon: PropTypes.string
}

export default DesktopNav;
