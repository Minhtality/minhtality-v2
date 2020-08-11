import React from 'react'
import PropTypes from 'prop-types';
import Styled from './index.styled';
import {CodeSlash} from 'css.gg';

const PageNavigation = ({
    title = 'Home',
    theme = 'LightMode',
    icon
}) => {
    return (
        <Styled.PageNavigation>
            <Styled.NavContainer>
                <Styled.LeftSection>
                    <Styled.Title>Minh</Styled.Title>
                    <Styled.Links>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </Styled.Links>
                </Styled.LeftSection>
                <Styled.RightSection>
                    <div><a href="/login">Login</a></div>
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
