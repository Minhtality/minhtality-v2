import styled from 'styled-components';


export default {
    NavContainer: styled.nav`
        display: grid;
    `,
    HeroContainer: styled.div`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        grid-auto-flow: column;
        border: 1px dotted black;
        .item {
            padding: 0;
            background-color: white;
            grid-column: span 6;
        }
        section {
            padding: 10px;
            border: 1px dotted red;
        }
        .type-a {
            padding-top: 45%;
            background-color: orange;
        }
        .type-b {
            padding-top: 45%;
            background: blue;
        }
        .item-inner {
            padding: 25px 0;
            background-color: black;
            grid-column: span 3;
        }
    `,
    InnerContainer: styled.section`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    `,
}