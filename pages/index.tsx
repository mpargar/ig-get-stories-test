import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import useLogin from "../context/Facebook/hooks/useLogin";
import Router from "next/router";
const Home: NextPage = () => {
  const { isLoggedIn } = useLogin();
  useEffect(() => {
    if (isLoggedIn) {
      //TODO: Redirect to stories
      Router.push("/stories");
    }
  }, [isLoggedIn]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Ig insights</title>
        <meta name="description" content="Ig insights login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </div>
  );
};

export default Home;
