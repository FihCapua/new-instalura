import React from "react";
import NextLink from "next/link";

export type LinkProps = {
  children: React.ReactNode;
  href?: string;
};

function Link({ children, href }: LinkProps) {
  const nextLink = href.match(/^\//) ? true : false;

  if (nextLink) {
    return <NextLink href={href}>{children}</NextLink>;
  }

  return <NextLink href={href}>{children}</NextLink>;
}

export default Link;
