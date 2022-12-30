import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/theme/theme";
import GlobalStyle from "../src/components/theme/globalstyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
