import React from "react";
import NextLink from "../../../infra/components/link";

export type LinkProps = {
  children: React.ReactNode;
  href: string;
};

export const Link = ({ children, href }: LinkProps) => {
  return <NextLink href={href}>{children}</NextLink>;
};
