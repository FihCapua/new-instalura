/* eslint-disable prettier/prettier */
import React from "react";
import { Typography } from "../../foundation/Typography";
import { Logo } from "../../theme/Logo";
import { Button } from "../Button";
import * as Styled from "./style";

export type MenuProps = {
  onClick();
  onCadastrarClick();
}

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
        {links.map((item) => {
          return (
            <li key={item.id}>
              <Typography variant="smallestException" as="a" link={item.url}>
                {" "}
                {item.text}{" "}
              </Typography>
            </li>
          );
        })}
      </Styled.CentralSide>

      <Styled.RightSide>
        <Button href="/" ghost={1} fullwidth={0}>Entrar</Button>
        <Button onCadastrarClick={onCadastrarClick} ghost={0} fullwidth={0} type='submit'>Cadastrar</Button>
      </Styled.RightSide>
    </Styled.MenuWrapper>
  );
}
