import styled, { css } from "styled-components";
import { TypographyStylesVariantsMap } from "../../foundation/Typography/style";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export type ButtonBehaviorProps = {
  ghost: boolean;
  fullWidth: boolean;
};

const ButtonGhost = css`
  color: #4d4d4d;
  background-color: transparent;
`;

const ButtonDefault = css`
  color: #fff;
  background-color: #ff0254;
`;

export const Button = styled.button<ButtonBehaviorProps>`
  font-family: ${({ theme }) => theme.font.family.default};
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 12px;
  font-weight: bold;
  opacity: 1;
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
    &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TypographyStylesVariantsMap.smallestException}
      margin: auto;
      display: block;
    `,
    md: css`
      ${TypographyStylesVariantsMap.paragraph1}
      margin: initial;
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
