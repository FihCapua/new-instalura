import React from "react";
import * as Styled from "./style";

export function Footer(props) {
  return (
    <Styled.FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante o{" "}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </Styled.FooterWrapper>
  );
}
