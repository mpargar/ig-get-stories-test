import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import useLogin from "../context/Facebook/hooks/useLogin";
import Router from "next/router";
import FacebookLoginButton from "../context/Facebook/components/FacebookLoginButton";
const FacebookLogin: NextPage & { layout: string } = () => {
  const { isLoggedIn } = useLogin();
  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/instagram-stories");
    }
  }, [isLoggedIn]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Ig insights</title>
        <meta name="description" content="Ig insights login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "center" }}>
        <FacebookLoginButton />
      </main>
    </div>
  );
};

FacebookLogin.layout = "UnAuthUserLayout";

export default FacebookLogin;
