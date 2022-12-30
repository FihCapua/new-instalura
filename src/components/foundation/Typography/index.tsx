import React from "react";
import * as Styled from "./style";

export type TypographyProps = {
  children?: React.ReactNode;
  link?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  variant?:
    | "title"
    | "titleXS"
    | "subTitle"
    | "paragraph1"
    | "paragraph2"
    | "smallestException";
  align?: "start" | "end" | "center" | "justify";
  color?:
    | "light"
    | "dark"
    | "primary"
    | "main"
    | "border"
    | "secondary"
    | "tertiary";
};

export const Typography = ({
  link,
  as = "p",
  variant = "paragraph1",
  align = "center",
  color = "primary",
  children,
}: TypographyProps) => {
  return (
    <Styled.TextBase
      href={link}
      as={as}
      variant={variant}
      align={align}
      color={color}
    >
      {children}
    </Styled.TextBase>
  );
};
