import React from "react";
import { Link } from "../../navigation/link";
import { Logo } from "../../theme/Logo";
import { Button } from "../Button";
import * as Styled from "./style";

export type MenuProps = {
  onCadastrarClick(): void;
};

export function Menu({ onCadastrarClick }: MenuProps) {
  const links = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "Perguntas Frequentes",
      url: "/faq",
    },
    {
      id: 3,
      text: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <Styled.MenuWrapper>
      <Styled.LeftSide>
        <Logo />
      </Styled.LeftSide>

      <Styled.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </Styled.CentralSide>

      <Styled.RightSide>
        <Button href="/app/login" ghost={1} fullwidth={0}>
          Entrar
        </Button>
        <Button
          ghost={0}
          onCadastrarClick={onCadastrarClick}
          fullwidth={0}
          type=""
        >
          Cadastrar
        </Button>
      </Styled.RightSide>
    </Styled.MenuWrapper>
  );
}
