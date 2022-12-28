import Head from "next/head";
import { Button } from "../src/components/common/Button";
import { Footer } from "../src/components/common/Footer";

import { Menu } from "../src/components/common/Menu";
import { Typography } from "../src/components/foundation/Typography";

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

      <div
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Menu />

        <div>
          <Typography variant="title" as="h1" color="tertiary" align="start">
            Compartilhe momentos e conecte-se com amigos
          </Typography>

          <Typography
            variant="paragraph1"
            as="p"
            color="tertiary"
            align="start"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            assumenda veritatis. Nisi veniam perspiciatis odit animi omnis
            deleniti maiores iusto non sed. Tempora fugit expedita eum odio
            earum itaque facere.
          </Typography>

          <Button ghost={false}>Cadastrar</Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
