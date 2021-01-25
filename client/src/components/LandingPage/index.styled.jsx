import React from 'react';
import styled from 'styled-components';

export default {
    LandingPage: styled.div`
        position: relative;;
        display: flex;
        height: 100%;
        width: calc(100% - 60px);
        padding: 30px;
        background-color: #d2d4d6;
    `,
    Left: styled.div`
        width: 25%;
        color: #FFF;
        background-color: #323B4C;
    `,
    AvatarContainer: styled.div`
        position: relative;
        width: 125px;
        height: 125px;
        border: 1px solid #333;
        background-color: #fff;
        border-radius: 50%;
        margin: 35px auto 40px;
    `,
    // Avatar: styled.img`
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    // `,
    Contact: styled.div``,
    Address: styled.div``,
    Right: styled.div`
        width: 75%;
        background-color: #F3F5F7;
    `,
}