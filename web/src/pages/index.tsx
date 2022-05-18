import Head from "next/head";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agência e-Plus | Home</title>
        <meta
          name="description"
          content={`Trabalhamos com a Agência e-Plus há mais
            de 6 anos. A base da nossa relação é a transparência
            e comunicação: Deu problema? 1- Evidência, 2- Prazo,
            3- Solução. Funciona demais! Nos ajudamos muito e
            nossos projetos e processos estão fluindo muito bem.
        `}
        />
      </Head>

      <Header />
    </>
  );
}
