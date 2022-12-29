import React from "react";
import { ModalWrapper } from "./style";
import { motion } from "framer-motion";

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
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: { x: "-100%" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </ModalWrapper>
  );
}
