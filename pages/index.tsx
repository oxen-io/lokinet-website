import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anonymous internet access - Lokinet</title>
        <meta
          name="description"
          content="Anonymous internet access - Lokinet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Lokinet - Anonymous internet access</h1>
      </Layout>
    </>
  );
}
