import Head from "next/head";

import { Menu } from "../src/components/common/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instalura Base</title>
        <meta name="description" content="Instalura" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
    </>
  );
}
