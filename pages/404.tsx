import React from "react";
import Lottie from "lottie-react";
import constructAnimation from "../public/images/page-construction.json";
import { Typography } from "../src/components/foundation/Typography";
import { Container } from "../src/components/layout/Container";

const errorPage = {
  maxWidth: "100%",
  width: "590px",
  height: "450px",
  margin: "0 auto",
};

export default function Page404() {
  return (
    <Container>
      <Lottie
        style={errorPage}
        className="lottie-container basic"
        animationData={constructAnimation}
        loop={false}
      />

      <Typography variant="title" as="h1" color="tertiary" align="center">
        Ooops
        <br />
        Não há ninguém aqui além dos construtores. Volte mais tarde!
      </Typography>
    </Container>
  );
}
