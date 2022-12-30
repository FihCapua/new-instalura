import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.typography.paragraph1.fontSize};
    font-weight: ${theme.typography.paragraph1.fontWeight};
    line-height: ${theme.typography.paragraph1.lineHeight};
  `}
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightColor};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typography.paragraph1.fontSize};
        font-weight: ${theme.typography.paragraph1.fontWeight};
        line-height: ${theme.typography.paragraph1.lineHeight};
      `}
    `,
  })}
`;
