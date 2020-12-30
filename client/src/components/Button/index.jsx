import React from 'react';
import Styled from './index.styled';

const Button = ({
    theme,
    children,
    onClick = () => {},
}) => {
    return (
        <Styled.Button onClick={onClick} theme={theme}>
            {children}
        </Styled.Button>
    )
}

export default Button
