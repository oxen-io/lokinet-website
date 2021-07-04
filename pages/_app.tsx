import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";
import { LokinetThemeProvider } from "../theme/theme";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <LokinetThemeProvider>
        <Component {...pageProps} />
      </LokinetThemeProvider>
    </>
  );
}
export default App;
