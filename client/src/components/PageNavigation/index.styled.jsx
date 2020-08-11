import styled from 'styled-components';

export default {
    PageNavigation: styled.div`
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
    Title: styled.h2`
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        padding-right: 30px;
    `,
    Links: styled.ul`
        display: flex;
        list-style: none;
        li {
            margin-right: 25px;
        }
    `,
}