import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
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

      <h1>Hello</h1>
    </div>
  );
}
