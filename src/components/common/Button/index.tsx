/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import { TypographyStylesVariantsMap } from "../../foundation/Typography/style";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export type ButtonBehaviorProps = {
  href?: any;
  ghost: number;
  fullwidth: number;
  children: React.ReactNode;
  disabled?: any;
  type?: string;
  onCadastrarClick?(): void;
  onClick?(): void;
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

  ${({ fullwidth }) =>
    fullwidth &&
    css`
      width: 100%;
    `}
`;

export function Button({
  href,
  ghost,
  fullwidth,
  disabled,
  type,
  onCadastrarClick,
  children,
}: ButtonBehaviorProps) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : "button";

  const ghostBehavior = Boolean(ghost);
  const ghostIsTrue = ghostBehavior ? 1 : 0;

  const fullwidthBehavior = Boolean(fullwidth);
  const fullwidthIsTrue = fullwidthBehavior ? 1 : 0;

  return (
    <ButtonWrapper
      href={href}
      ghost={ghostIsTrue}
      fullwidth={fullwidthIsTrue}
      disabled={disabled}
      type={type}
      onClick={onCadastrarClick}
      as={tag}
    >
      {children}
    </ButtonWrapper>
  );
}
