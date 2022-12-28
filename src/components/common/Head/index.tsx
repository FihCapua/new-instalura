import React from "react";
import NextHead from "next/head";

export type Title = {
  title: string;
};

export default function Head() {
  return (
    <NextHead>
      <title>New Instalura Project</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        property="og:title"
        content="New Instalura Project"
        key="New Instalura Project"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
