import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout/Layout'
import { PageRoot } from '../components/layout/PageRoot'

export default function Home() {
  return (
    <PageRoot>
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
    </PageRoot>
  )
}
