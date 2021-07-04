import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

export const COLORS = {
  light: {
    text: "black",
    background: "white",
    secondary: "rgb(58, 58, 58)",
    borderAccordion: "rgb(212, 212, 212)",
  },

  dark: {
    text: "white",
    background: "black",
    secondary: "white",
    borderAccordion: "white",
  },
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const MagicScriptTag = () => {
      let codeToRunOnClient = `
    (function() {
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem("color-mode");
        const hasPersistedPreference = typeof persistedColorPreference === "string";
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const hasMediaQueryPreference = typeof mql.matches === "boolean";
        if (hasMediaQueryPreference) {
          return mql.matches ? "dark" : "light";
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return "light";
      }
      const colorMode = getInitialColorMode();
      const root = document.documentElement;
      root.style.setProperty(
        '--color-text',
        colorMode === 'light'
          ? '${COLORS.light.text}'
          : '${COLORS.dark.text}'
      );
      root.style.setProperty(
        '--color-background',
        colorMode === 'light'
          ? '${COLORS.light.background}'
          : '${COLORS.dark.background}'
      );
      root.style.setProperty(
        '--color-secondary',
        colorMode === 'light'
          ? '${COLORS.light.secondary}'
          : '${COLORS.dark.secondary}'
      );
      root.style.setProperty(
        '--color-border-accordion',
        colorMode === 'light'
          ? '${COLORS.light.borderAccordion}'
          : '${COLORS.dark.borderAccordion}'
      );

            root.style.setProperty('--margins-xs', '5px');
            root.style.setProperty('--margins-sm', '10px');
            root.style.setProperty('--margins-md', '15px');
            root.style.setProperty('--margins-lg', '20px');
            root.style.setProperty('--margins-xl', '30px');
            root.style.setProperty('--margins-xxl', '70px');
            root.style.setProperty('--duration-linkBottom', '0.2');

      root.style.setProperty('--initial-color-mode', colorMode);


    })()`;
      // eslint-disable-next-line react/no-danger
      return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
    };

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <MagicScriptTag />
        </body>
      </Html>
    );
  }
}
