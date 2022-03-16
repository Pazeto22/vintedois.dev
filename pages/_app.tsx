import { AppProps } from "next/app";
// Dynamic para desativar SSR durante desenvolvimento
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Navbar from "components/UI/Navbar";
import "../styles/globals.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>VinteDois.dev</title>
      </Head>
      <Navbar />
      <div style={{ marginTop: "8rem" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

// Dynamic para desativar SSR durante desenvolvimento
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
