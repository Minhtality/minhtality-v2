import styled, {css} from 'styled-components';

export const buttonStyle = {
    default: css`
        color: rgba(0, 0, 0, 0.87);
        border: 2px solid transparent;
        background-color: #e0e0e0;
    `,
    AddButton: css`
        color: #FFF;
        border: 2px solid transparent;
        background: green;
    `,
    EditButton: css`
        color: #FFF;
        border: 2px solid transparent;
        background: orange;
    `,
    DeleteButton: css`
        color: #FFF;
        border: 2px solid transparent;
        background: red;
    `,
    PrimaryBlack: css``,
    PrimaryWhite: css``,

};

export default {
    Button: styled.button`
        border-radius: 4px;
        box-sizing: border-box;
        text-decoration: none;
        min-width: 100px;
        padding: 0 30px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        cursor: pointer;
        -moz-appearance: none;
        -webkit-appearance: none;
        ${props => buttonStyle[props.theme] || buttonStyle['default']}
    `,
}