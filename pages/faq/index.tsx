import React from "react";
import { FAQScreen } from "../../src/components/screens/FAQScreen";

export default function FAQPage(props) {
  /* const [faqCategories, setFaqCategories] = useState([]); */

  /*  useEffect(() => {
    fetch("https://instalura-api.vercel.app/api/content/faq")
      .then((responseServer) => responseServer.json())
      .then((responseConverter) => responseConverter.data)
      .then((response) => {
        setFaqCategories(response);
      });
  }); */
  return <FAQScreen {...props} />;
}

export async function getStaticProps() {
  const faqCategories = await fetch(
    "https://instalura-api.vercel.app/api/content/faq"
  ).then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
  return {
    props: {
      faqCategories,
    },
  };
}
