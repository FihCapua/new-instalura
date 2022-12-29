import styled, { css } from "styled-components";

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
  width: 50%;
  background-color: #fff;
  display: flex;
  flex: 1;
`;
