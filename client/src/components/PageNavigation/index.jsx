import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Styled from './index.styled';
import {Link} from 'react-router-dom';

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
                    <Styled.Title href='/' target="_self">Minh</Styled.Title>
                    <Styled.Links>
                        {/* <li>
                            <Link to="/">Home</Link>
                        </li> */}
                        {/* <div onClick={toggleDropdown}>
                            <li>Projects</li>
                            {showDropdown && 
                                <div>
                                    <Link to="/pokemon">Pokemon</Link>
                                    <Link to="/contacts">Contacts</Link>
                                </div>
                            }
                        </div> */}
                    </Styled.Links>
                </Styled.LeftSection>
                {/* <Styled.RightSection>
                    <div><Link to="/login">Login</Link></div>
                </Styled.RightSection> */}
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
