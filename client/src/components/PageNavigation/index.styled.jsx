import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default {
    PageNavigation: styled.div`
        position: relative;
        border-bottom: #999 solid 1px;
        margin-bottom: 45px;
        box-sizing: border-box;
    `,
    DesktopNav: styled.div`
        position: relative;
        border-bottom: #999 solid 1px;
        margin-bottom: 45px;
        box-sizing: border-box;
    `,
    NavContainer: styled.div`
        position: relative;
        display: flex;
        justify-items: center;
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 1440px;
        width: 100%;
    `,
    LeftSection: styled.div`
        align-items: center;
        display: flex;
        flex-grow: 1;
    `,
    RightSection: styled.div`
        align-items: center;
        display: flex;
    `,
    Dropdown: styled.div`
        position: relative;
        cursor: pointer;
    `,
    DropdownList: styled.div`
        position: absolute;
        inset: 0px auto auto 0px;
        transform: translate(0px, 25px);
        background-color: #fff;
        border: 1px solid black;
        border-radius: .25rem;
        a {
            display: block;
        }
    `,
    Title: styled.h2`
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        padding-right: 30px;
    `,
    Links: styled.ul`
        display: flex;
        list-style: none;
        li, div {
            margin-right: 25px;
        }
    `,
    Link: styled(Link)`
        text-decoration: none;
        color: #000;
    `,
}