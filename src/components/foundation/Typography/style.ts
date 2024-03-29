import styled, { css } from "styled-components";
import { TypographyProps } from ".";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export const TypographyStylesVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typography.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typography.smallestException.lineHeight};
  `,
};

export const TextBase = styled.p<TypographyProps>`
  ${(props) => TypographyStylesVariantsMap[props.variant]}
  font-family: ${({ theme }) => theme.font.family.default};
  color: ${({ theme }) => theme.colors.darkText};
  ${breakpointsMedia({
    xs: css`
      text-align: center;
    `,
    md: css`
      text-align: center;
    `,
  })}
`;
