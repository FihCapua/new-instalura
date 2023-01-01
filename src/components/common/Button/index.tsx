import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import { TypographyStylesVariantsMap } from "../../foundation/Typography/style";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export type ButtonBehaviorProps = {
  ghost: boolean;
  fullWidth: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href?: any;
  children: React.ReactNode;
  onCadastrarClick?();
  onClick?();
};

const ButtonGhost = css`
  color: #4d4d4d;
  background-color: transparent;
`;

const ButtonDefault = css`
  color: #fff;
  background-color: #ff0254;
`;

const ButtonWrapper = styled.button<ButtonBehaviorProps>`
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

export function Button({
  href,
  children,
  onCadastrarClick,
  ...props
}: ButtonBehaviorProps) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : "button";

  return (
    <ButtonWrapper href={href} onClick={onCadastrarClick} as={tag} {...props}>
      {children}
    </ButtonWrapper>
  );
}
