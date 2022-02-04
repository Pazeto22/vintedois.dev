import Home from "./Home";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Agência Eva Commerce" key="title" />
        <meta
          name="description"
          content="As melhores soluções focadas em performance para o seu e-commerce, iremos proporcionar a melhor experiência de compra em sua loja. "
        />
        <title>VinteDois.dev | Em Construção</title>
      </Head>
      <Home />
    </>
  );
}
