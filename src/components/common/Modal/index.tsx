import React from "react";
import { ModalWrapper } from "./style";

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose();
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const element = event.target as Element;
        const isSafeArea = element.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {children}
    </ModalWrapper>
  );
}
