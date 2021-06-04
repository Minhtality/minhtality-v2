import React, { useState } from 'react'
import PropTypes from 'prop-types';
import * as Styled from './index.styled';
import { Menu, MenuItem } from '@material-ui/core';
import {Link} from 'react-router-dom';

const PageNavigation = ({
    brand = '',
    links = [],
}) => {

    const [showDropdown, setDropdown] =  useState(false);
    const toggleDropdown = () => {
        setDropdown(!showDropdown);
    };

    return (
        <Styled.PageNavigation>
            <Styled.NavContainer>
                <Styled.LeftSection>
                    <Styled.Brand >
                        <Styled.BrandButton href='#' target="_self">{brand}</Styled.BrandButton>
                    </Styled.Brand>
                </Styled.LeftSection>
                <Styled.RightSection>
                    {links && 
                        <Styled.Links>
                            {links.map(link => (
                                <a href={link.href} target={link.target}>{link.text}1</a>
                            ))}
                        </Styled.Links>
                    }
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

export default PageNavigation;
