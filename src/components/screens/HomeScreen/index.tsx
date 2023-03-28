import React from "react";
import SEO from "../../../infra/components/SEO";
import { Button } from "../../common/Button";
import { Typography } from "../../foundation/Typography";
import { Container } from "../../layout/Container";
import { Col, Row } from "../../layout/Grid/style";
import { WebsitePageContext } from "../../wrapper/WebsitePageWrapper";

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <>
      <SEO headTitle="Home" />
      <Container>
        <Row>
          <Col>
            <Typography variant="title" as="h1" color="tertiary" align="start">
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
              onCadastrarClick={() => websitePageContext.toggleModalRegister()}
              fullwidth={0}
            >
              Cadastrar
            </Button>
          </Col>

          <Col>
            <img src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
