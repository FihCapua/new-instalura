import React, { useState } from "react";
import { Typography } from "../../foundation/Typography";
import { Menu } from "../../common/Menu";
import { Footer } from "../../common/Footer";
import { Modal } from "../../common/Modal";
import { FormCadastro } from "../../patterns/FormCadastro";
import { Container } from "../../layout/Container";
import { BoxModal } from "../../common/Modal/style";
import { Col, Row } from "../../layout/Grid/style";

export type Categories = {
  id: number;
  title: string;
  slug: string;
  questions: Questions[];
};

export type Questions = {
  id: number;
  title: string;
  slug: string;
  description: string;
};

export type FAQScreenProps = {
  faqCategories: Categories[];
};

export function FAQScreen({ faqCategories }: FAQScreenProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Container>
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
        onClick={() => setModalOpen(true)}
        onCadastrarClick={() => setModalOpen(true)}
      />

      <Row>
        <Col>
          <Typography variant="title" as="h1" color="tertiary" align="start">
            Como podemos te ajudar?
          </Typography>

          <Col>
            <Row>
              {faqCategories &&
                faqCategories.map((category) => (
                  <Col key={category.id}>
                    <Typography
                      variant="title"
                      as="h1"
                      color="tertiary"
                      align="center"
                    >
                      {category.title}
                    </Typography>

                    {faqCategories.map((question) => (
                      <ul key={question.id}>
                        <li>
                          <Typography
                            link={`/faq/${question.slug}`}
                            variant="paragraph1"
                            as="h2"
                            color="tertiary"
                            align="justify"
                          >
                            {question.questions.map((question) => (
                              <li key={question.id}>{question.slug}</li>
                            ))}
                          </Typography>
                        </li>
                      </ul>
                    ))}
                  </Col>
                ))}
            </Row>
          </Col>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}
