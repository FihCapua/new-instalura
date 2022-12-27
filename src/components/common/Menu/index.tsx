import { Logo } from "../../theme/Logo";
import * as Styled from "./style";

export function Menu() {
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
      <Styled.LeftSide><Logo/></Styled.LeftSide>

      <Styled.CentralSide>
        {links.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}> {item.text} </a>
            </li>
          );
        })}
      </Styled.CentralSide>

      <Styled.RightSide>Buttons area </Styled.RightSide>
    </Styled.MenuWrapper>
  );
}
