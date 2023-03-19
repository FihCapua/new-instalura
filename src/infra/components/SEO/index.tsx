import React from "react";
import Head from "../head";

export type SEOProps = {
  headTitle?: string;
};

export default function SEO({ headTitle }: SEOProps) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = "Instalura - Projeto do Bootcamp da Alura";
  const title = hasHeadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;

  return (
    <Head title={title}>
      <title>{title}</title>
    </Head>
  );
}
