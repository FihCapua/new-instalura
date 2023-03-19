import React, { useState } from "react";
import { Button } from "../src/components/common/Button";
import { Footer } from "../src/components/common/Footer";

import { Menu } from "../src/components/common/Menu";
import { Typography } from "../src/components/foundation/Typography";
import { Container } from "../src/components/layout/Container";
import { Col, Row } from "../src/components/layout/Grid";
import { Modal } from "../src/components/common/Modal";
import { BoxModal } from "../src/components/common/Modal/style";
import { FormCadastro } from "../src/components/patterns/FormCadastro";
import SEO from "../src/infra/components/SEO";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO headTitle="Home" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          <BoxModal data-modal-safe-area="true">
            <FormCadastro />
          </BoxModal>
        </Modal>
        <Menu
          onCadastrarClick={() => setModalOpen(true)}
          onClick={() => setModalOpen(!isModalOpen)}
        />

        <Container>
          <Row>
            <Col>
              <Typography
                variant="title"
                as="h1"
                color="tertiary"
                align="start"
              >
                Compartilhe momentos e conecte-se com amigos
              </Typography>

              <Typography
                variant="paragraph1"
                as="p"
                color="tertiary"
                align="start"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                assumenda veritatis. Nisi veniam perspiciatis odit animi omnis
                deleniti maiores iusto non sed. Tempora fugit expedita eum odio
                earum itaque facere.
              </Typography>

              <Button
                ghost={0}
                onClick={() => setModalOpen(!isModalOpen)}
                fullwidth={0}
                type=""
              >
                Cadastrar
              </Button>
            </Col>

            <Col>
              <img src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png" />
            </Col>
          </Row>
        </Container>

        <div></div>

        <Footer />
      </div>
    </>
  );
}
