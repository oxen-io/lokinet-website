import Head from "next/head";
// import styles from "../styles/Faq.module.css";
import Layout from "../components/layout/Layout";

export default function Faq() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ - Lokinet</title>
        <meta name="description" content="FAQ - Lokinet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Lokinet - FAQ</h1>
      </Layout>
    </div>
  );
}
