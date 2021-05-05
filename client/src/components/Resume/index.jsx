import React from 'react';
import * as Styled from './index.styled';

const Resume = () => {
    return (
        <Styled.ResumeContainer>
            <Styled.SideBar >
                <Styled.SideBarContainer>
                    <Styled.Skills>
                        <h2>TECHNICAL SKILLS</h2>
                        <ul>
                            <li>Languages: Javascript, React,</li>
                            <li></li>
                        </ul>
                    </Styled.Skills>
                    <div>
                        <h2>EDUCATION HEADING</h2>
                        <p><span>2016</span>-<span>2018</span></p>
                        <h3>California State University of Fullerton</h3>
                        <p>Bachelor's degree. Information Science/Studies</p>
                    </div>
                </Styled.SideBarContainer>
            </Styled.SideBar>
            <Styled.Main>
                <Styled.Header>
                    <Styled.Icon 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQH3qBCPRsGTyA/profile-displayphoto-shrink_800_800/0/1575581866165?e=1625097600&v=beta&t=IUoQttLKMRn9ApMv3_mCW3ho0DELkRnV9m6Lkk9TINg" 
                        alt="Avatar"
                    />
                    <h1>Minh Tran</h1>
                    <p>
                        <span>Front-End Developer</span>
                        <span>Los Angeles</span>
                    </p>
                    <div>
                        <a href="#">email</a>
                        <a href="#">website</a>
                        <a href="#">github</a>
                        <a href="#">linkedin</a>
                    </div>
                </Styled.Header>
                <Styled.AboutMe>
                    <h2>ABOUT ME</h2>
                    <p>
                    Ham tongue tri-tip, fatback chuck chicken t-bone porchetta burgdoggen kielbasa leberkas. Swine cupim drumstick frankfurter, biltong jowl jerky beef meatball porchetta fatback. Ground round beef landjaeger turducken, alcatra pancetta meatball salami capicola tail ball tip short loin kielbasa. Burgdoggen brisket cupim bresaola, jowl prosciutto short ribs pork chop capicola. Swine salami meatball, tail rump ground round meatloaf pastrami bresaola. Prosciutto sirloin cupim, strip steak pastrami drumstick jerky tongue landjaeger pork belly rump buffalo leberkas capicola.
                    </p>
                    <p>
                        Bacon ipsum dolor amet landjaeger ball tip tongue brisket kevin chislic corned beef pancetta pork chop leberkas beef ribs. Jerky ground round ham turducken prosciutto bresaola.
                    </p>
                </Styled.AboutMe>
                <Styled.ShowCase>
                    <div>
                        <h2>EXPERIENCE HEADING</h2>
                        <p><span>12/2019</span>-<span>Present</span></p>
                        <h3>Junior Front-end Developer</h3>
                        <p><span>Team One USA | Lexus.com</span><span>Los Angeles</span></p>
                        <ul>
                            <li>Maintaining legacy application</li>
                            <li>Handle multiple projects</li>
                            <li>Implement component for model page redesign</li>
                        </ul>
                    </div>
                    <div>
                        <h2>PROJECTS HEADING</h2>
                        <div>
                            <p><span>06/2019</span>-<span>Present</span></p>
                            <h3>Lexus.com | Adobe Experience Manager Migration</h3>
                            <ul>
                                <li>Thing one for AEM</li>
                                <li>Thing two for AEM</li>
                                <li>Thing three for AEM</li>
                            </ul>
                        </div>
                        <div>
                            <p><span>12/2019</span>-<span>06/2012</span></p>
                            <h3>Lexus.com | Model Page Redesign</h3>
                            <ul>
                                <li>Thing one for model page redesign</li>
                                <li>Thing two for model page redesign</li>
                                <li>Thing three for model page redesign</li>
                            </ul>
                        </div>
                    </div>
                </Styled.ShowCase>
            </Styled.Main>
        </Styled.ResumeContainer>
    )
}

export default Resume;
