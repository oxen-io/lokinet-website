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

  :root {
    --margins-xs: 5px;
    --margins-sm: 10px;
    --margins-md: 15px;
    --margins-lg: 20px;
    --margins-xl: 30px;
    --margins-xxl: 70px;
    --duration-linkBottom: 0.1s;
    --color-text: black;
    --color-background: white;
    --color-secondary: rgb(58, 58, 58);
    --color-border-accordion: rgb(212, 212, 212);
    --initial-color-mode: 'light';
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
