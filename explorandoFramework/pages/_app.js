import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps, example }) {
    return (
      <>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }