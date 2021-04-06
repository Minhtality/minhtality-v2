import styled from 'styled-components';

export const PageNavigation = styled.div`
    position: relative;
    margin-bottom: 45px;
    box-sizing: border-box;
`;

export const NavContainer = styled.div`
    position: relative;
    display: flex;
    justify-items: center;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    align-items: center;
    /* border-bottom: 1px solid rgb(226, 226, 226); */
    padding: 15px 20px;
    &:after {
        content: '';
        position: absolute;
        background-color: rgb(226, 226, 226);
        height: 1px;
        bottom: 0;
        width: calc(100% - 40px);
    }
`;
export const LeftSection = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
`;
export const RightSection = styled.div`
    align-items: center;
    display: flex;
`;
export const Brand = styled.h2`
    font-size: 28px;
    line-height:  24px;
    margin: 0;
    padding-right: 30px;
    display: inline-block;
`;
export const BrandButton = styled.a`
    text-decoration: none;
    color: inherit;
`;
export const Links = styled.ul`
    display: flex;
    list-style: none;
    li {
        margin-right: 25px;
    }
`;
