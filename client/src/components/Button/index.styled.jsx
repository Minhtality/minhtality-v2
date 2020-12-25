import styled, {css} from 'styled-components';

export const buttonStyle = {
    default: css`
        color: rgba(0, 0, 0, 0.87);
        border: 2px solid transparent;
        background: #e0e0e0;
    `,
    AddButton: css`
        color: #FFF;
        border: 2px solid transparent;
        background: #39603D;
    `,
    EditButton: css`
        color: #FFF;
        border: 2px solid transparent;
        background: #F1B24A;
    `,
    DeleteButton: css`
        color: #FFF;
        border: 2px solid transparent;
        background: #932432;
    `,
    Primary: css`
        color: #3C403D;
        border: 2px solid #3C403D;
        background: transparent;
    `,
    Secondary: css`
        color: #FFFFFF;
        border: 2px solid #3C403D;
    `,

};

export default {
    Button: styled.button`
        box-sizing: border-box;
        text-decoration: none;
        min-width: 100px;
        padding: 0 20px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        cursor: pointer;
        margin-bottom: 15px;
        -moz-appearance: none;
        -webkit-appearance: none;
        ${props => buttonStyle[props.theme] || buttonStyle['default']}
    `,
}