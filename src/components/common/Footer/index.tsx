import React from "react";
import * as Styled from "./style";
import { Link } from "../../navigation/link";

export function Footer(props) {
  return (
    <Styled.FooterWrapper {...props}>
      <Link href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </Link>
      <p>
        Orgulhosamente criado durante o
        <Link href="https://www.alura.com.br/"> Bootcamp Alura JAM Stack</Link>
      </p>
    </Styled.FooterWrapper>
  );
}
