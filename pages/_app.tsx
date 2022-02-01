import { AppProps } from "next/app";
// Dynamic para desativar SSR durante desenvolvimento
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import "swiper/css/bundle";
import "../tailwind.source.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Início | App</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

// Dynamic para desativar SSR durante desenvolvimento
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
