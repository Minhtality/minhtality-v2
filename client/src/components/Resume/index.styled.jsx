import styled from 'styled-components';
import breakpoints from '../breakpoints';

export const ResumeContainer = styled.div`
    display: flex;
    width: 100%;
`;
export const SideBar = styled.div`
    background: #2C3546;
    width: 25%;
    color: #fff;
    position: relative;
`;
export const SideBarContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    display: block;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

`;
export const Main = styled.div`
    width: calc(75% - 14%);
    padding: 0 7%;
    max-width: 1200px;
`;
export const Header = styled.div`
    margin-bottom: 40px;
`;
export const AboutMe = styled.section`
    margin-bottom: 40px;
`;
export const ShowCase = styled.section``;
export const Skills = styled.div`

`;
export const Languages = styled.div``;
export const Icon = styled.img`
    width: 10rem;
    position: fixed;
    top: 2em;
    right: 75%;
    transform: translateX(25%);
    border: 4px solid #f7f7f7;
    border-radius: 50%;
`;