import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --color-text: black;
    --color-background: white;
    --color-secondary: rgb(58, 58, 58);
    --color-border-accordion: rgb(212, 212, 212);
  }

  /* html {
    --color-text: white;
    --color-background: black;
    --color-secondary: white;
    --color-border-accordion: white;
  } */
`;
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
