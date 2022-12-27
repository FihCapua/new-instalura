import styled, { css } from "styled-components";

export type ButtonBehaviorProps = {
    ghost: boolean;
}

const ButtonGhost = css`
    color: #4d4d4d;
    background-color: transparent;
`

const ButtonDefault = css`
    color: #fff;
    background-color: #ff0254;
`;

export const Button = styled.button<ButtonBehaviorProps>`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    border-radius: 12px;
    font-weight: bold;
    opacity: 1;
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover,
    &:focus {
        opacity: .5;
    }
`
