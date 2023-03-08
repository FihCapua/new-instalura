import React from "react";
import NextHead from "next/head";

export type Title = {
  children: React.ReactNode;
  title: string;
};

export default function Head({ children, title }: Title) {
  return (
    <NextHead>
      <title>{title}</title>
      {children}
    </NextHead>
  );
}
