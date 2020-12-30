import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Styled from './index.styled';
import styled from 'styled-components';

const PageNavigation = ({
    title = 'Home',
    theme = 'LightMode',
    icon
}) => {

    const [showDropdown, setDropdown] =  useState(false);
    const toggleDropdown = () => {
        setDropdown(!showDropdown);
    };

    return (
        <Styled.PageNavigation>
            <Styled.NavContainer>
                <Styled.LeftSection>
                    <Styled.Title>Minh</Styled.Title>
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
        </Styled.PageNavigation>
    )
};

PageNavigation.propTypes = {
    /** Page Title */
    title: PropTypes.string,
    /** Navigation bar theme */
    theme: PropTypes.oneOf(['DarkMode','LightMode']),
    /** Site's icon/logo */
    icon: PropTypes.string
}

export default PageNavigation
