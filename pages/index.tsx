import React from "react";
import SEO from "../src/infra/components/SEO";
import HomeScreen from "../src/components/screens/HomeScreen";
import { WebsitePageWrapper } from "../src/components/wrapper/WebsitePageWrapper";

export default function Home() {
  return (
    <>
      <SEO headTitle="Home" />

      <WebsitePageWrapper>
        <HomeScreen />
      </WebsitePageWrapper>
    </>
  );
}
