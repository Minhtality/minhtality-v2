import React from 'react';
import Styled from './index.styled';

const LoginForm = () => {
    return (
            <Styled.InputWrapper htmlFor="userName">
                <Styled.InputField type="text" id="userName"/>
                <Styled.FloatLabel>User Name</Styled.FloatLabel>
            </Styled.InputWrapper>
    )
}

export default LoginForm
