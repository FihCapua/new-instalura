import React, { createContext, useState } from "react";
import { Footer } from "../../common/Footer";
import { Menu } from "../../common/Menu";
import { Modal } from "../../common/Modal";
import { BoxModal } from "../../common/Modal/style";
import { Container } from "../../layout/Container";
import { Box } from "../../layout/Grid/style";
import { FormCadastro } from "../../patterns/FormCadastro";

export type WebsitePageProps = {
  children: React.ReactNode;
};

export const WebsitePageContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleModalRegister: () => {},
});

export function WebsitePageWrapper({ children }: WebsitePageProps) {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalRegister: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <Container>
        <Box>
          <Menu onCadastrarClick={() => setModalState(true)} />
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setModalState(false);
            }}
          >
            <BoxModal data-modal-safe-area="true">
              <FormCadastro />
            </BoxModal>
          </Modal>
          {children}
          <Footer />
        </Box>
      </Container>
    </WebsitePageContext.Provider>
  );
}
