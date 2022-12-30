import styled, { createGlobalStyle, css } from "styled-components";
import { breakpointsMedia } from "../../theme/utils/breakpointMedia";

export type ModalBehaviorProps = {
  isOpen: boolean;
};

export const ModalWrapper = styled.div<ModalBehaviorProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  transition: 0.3s;
  z-index: 100;
  justify-content: flex-end;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export const BoxModal = styled.div`
  max-width: 100%;
  background-color: #fff;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 65px;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
      height: 400px;
    `,
    md: css`
      width: 50%;
      height: 100vh;
    `,
  })}
`;

export const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
