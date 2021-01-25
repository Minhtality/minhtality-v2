import React from 'react';
import Styled from './index.styled';

const LandingPage = ({
    personalInfo = {},
    experience = [],
    education = [],
    skills = {},
    reference = []
}) => {
    return (
        <Styled.LandingPage>
           <Styled.Left>
               <Styled.AvatarContainer>
                    
               </Styled.AvatarContainer>
               <Styled.Contact>
                   <Styled.Address>{personalInfo.address}</Styled.Address>
               </Styled.Contact>
           </Styled.Left>
           <Styled.Right></Styled.Right>
        </Styled.LandingPage>
    )
};

export default LandingPage;
