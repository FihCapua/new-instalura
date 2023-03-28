import React from "react";
import SEO from "../src/infra/components/SEO";
import { WebsitePageWrapper } from "../src/components/wrapper/WebsitePageWrapper";
import HomeScreen from "../src/components/screens/HomeScreen";

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
