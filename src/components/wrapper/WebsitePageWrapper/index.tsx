import React, { createContext, useState } from "react";
import { Footer } from "../../common/Footer";
import { Menu } from "../../common/Menu";
import { Modal } from "../../common/Modal";
import { Container } from "../../layout/Container";
import { Box } from "../../layout/Grid/style";
import { FormCadastro } from "../../patterns/FormCadastro";

export type WebsitePageProps = {
  children: React.ReactNode;
};

export const WebsitePageContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleModalCadastro: () => {},
});

export function WebsitePageWrapper({ children }: WebsitePageProps) {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
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
            <FormCadastro onClose={() => setModalState(false)} />
          </Modal>
          {children}
          <Footer />
        </Box>
      </Container>
    </WebsitePageContext.Provider>
  );
}
