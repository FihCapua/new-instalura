import { Button } from "../src/components/common/Button";
import { Footer } from "../src/components/common/Footer";

import { Menu } from "../src/components/common/Menu";
import { Typography } from "../src/components/foundation/Typography";
import Head from "../src/components/common/Head";

export default function Home() {
  return (
    <>
      <Head />
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