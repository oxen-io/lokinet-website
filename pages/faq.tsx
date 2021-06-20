import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { PageRoot } from '../components/layout/PageRoot'
export default function Faq() {
  return (
    <PageRoot>
      <Head>
        <title>FAQ - Lokinet</title>
        <meta name="description" content="FAQ - Lokinet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Lokinet - FAQ</h1>
      </Layout>
    </PageRoot>
  )
}
