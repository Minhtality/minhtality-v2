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
    padding: 15px 0;
    &:after {
        content: '';
        position: absolute;
        background-color: rgb(226, 226, 226);
        height: 1px;
        bottom: 0;
        width: 100%;
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
    font-size: 20px;
    line-height: 11px;
    padding: 0;
    a {
        margin-left: 22px;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
`;