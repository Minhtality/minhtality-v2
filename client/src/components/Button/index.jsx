import React from 'react';
import Styled from './index.styled';

const Button = ({
    theme,
    children
}) => {
    return (
        <Styled.Button theme={theme}>
            {children}
        </Styled.Button>
    )
}

export default Button
