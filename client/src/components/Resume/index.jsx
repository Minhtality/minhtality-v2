import React from 'react';
import * as Styled from './index.styled';

const Resume = () => {
    return (
        <Styled.ResumeContainer>
            <Styled.SideBar >
                <div>
                    <Styled.Skills>Skills</Styled.Skills>
                    <Styled.Languages>Language</Styled.Languages>
                </div>
            </Styled.SideBar>
            <Styled.Main>
                <Styled.Header>
                    <Styled.Icon 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQH3qBCPRsGTyA/profile-displayphoto-shrink_800_800/0/1575581866165?e=1625097600&v=beta&t=IUoQttLKMRn9ApMv3_mCW3ho0DELkRnV9m6Lkk9TINg" 
                        alt="Avatar"
                    />
                    <div>Minh Tran</div>
                    <p>
                        <span>Front-End Developer</span>
                        <span>Los Anegles</span>
                    </p>
                    <div>
                        <a href="">email</a>
                        <a href="">website</a>
                        <a href="">github</a>
                        <a href="">linkedin</a>
                    </div>
                </Styled.Header>
                <Styled.AboutMe>
                    <div>ABOUT ME</div>
                    <p>
                    Ham tongue tri-tip, fatback chuck chicken t-bone porchetta burgdoggen kielbasa leberkas. Swine cupim drumstick frankfurter, biltong jowl jerky beef meatball porchetta fatback. Ground round beef landjaeger turducken, alcatra pancetta meatball salami capicola tail ball tip short loin kielbasa. Burgdoggen brisket cupim bresaola, jowl prosciutto short ribs pork chop capicola. Swine salami meatball, tail rump ground round meatloaf pastrami bresaola. Prosciutto sirloin cupim, strip steak pastrami drumstick jerky tongue landjaeger pork belly rump buffalo leberkas capicola.
                    </p>
                    <p>
                        Bacon ipsum dolor amet landjaeger ball tip tongue brisket kevin chislic corned beef pancetta pork chop leberkas beef ribs. Jerky ground round ham turducken prosciutto bresaola.
                    </p>
                </Styled.AboutMe>
                <Styled.ShowCase>Showcase here</Styled.ShowCase>
            </Styled.Main>
        </Styled.ResumeContainer>
    )
}

export default Resume;
