import styles from "./Layout.module.css";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
