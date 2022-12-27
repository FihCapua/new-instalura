import Head from "next/head";
import { Footer } from "../src/components/common/Footer";

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
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
      />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Menu />
        <Footer />
      </div>
    </>
  );
}
