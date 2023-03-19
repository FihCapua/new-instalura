import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/theme/theme";
import GlobalStyle from "../src/components/theme/globalstyles";
import Head from "../src/infra/components/head";
import SEO from "../src/infra/components/SEO";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head title="New Instalura Project">
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Aprendendo programação, Front-End, React e Next.js"
        />
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
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO />

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
