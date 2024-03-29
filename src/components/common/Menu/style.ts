import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";
import { TypographyStylesVariantsMap } from "../../foundation/Typography/style";

export const MenuWrapper = styled.nav`
  font-family: ${({ theme }) => theme.font.family.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

export const LeftSide = styled.div`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 10px;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

export const RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export const CentralSide = styled.ul`
  padding: 0;
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 12px;

  li {
    padding: 0 5px;
  }

  ${breakpointsMedia({
    md: css`
      max-width: 100%;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0 50px;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TypographyStylesVariantsMap.smallestException}
      `,
      md: css`
        ${TypographyStylesVariantsMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;
