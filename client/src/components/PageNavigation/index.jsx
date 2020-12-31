import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Styled from './index.styled';
import styled from 'styled-components';
import DesktopNav from './DesktopNav';

const PageNavigation = ({
    title = 'Home',
    theme = 'LightMode',
    icon
}) => {
    return (
        <>
            <DesktopNav />
        </>
    );
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
