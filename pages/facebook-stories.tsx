import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useLogin from "../context/Facebook/hooks/useLogin";
import Router from "next/router";
const FacebookStories: NextPage & { layout: string } = () => {
  const { isLoggedIn } = useLogin();
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/facebook-login");
    }
  }, [isLoggedIn]);
  return <>xxxx</>;
};

FacebookStories.layout = "AuthUserLayout";

export default FacebookStories;
