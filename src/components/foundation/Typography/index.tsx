import * as Styled from "./style";

export type TypographyProps = {
  children: React.ReactNode;
  link?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  variant?:
    | "title"
    | "titleXS"
    | "subTitle"
    | "paragraph1"
    | "paragraph2"
    | "smallestException";
};

export const Typography = ({
  link,
  as = "p",
  variant = "smallestException",
  children,
}: TypographyProps) => {
  return (
    <Styled.TextBase as={as} variant={variant} href={link}>
      {children}
    </Styled.TextBase>
  );
};
