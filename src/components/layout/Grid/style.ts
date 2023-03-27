import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding-right: 16px;
      padding-left: 16px;
    `,
  })}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
