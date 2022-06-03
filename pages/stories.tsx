import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useLogin from "../context/Facebook/hooks/useLogin";
import Router from "next/router";
const Stories: NextPage & { layout: string } = () => {
  const { isLoggedIn } = useLogin();
  useEffect(() => {
    if (!isLoggedIn) {
      //TODO: Redirect to stories
      Router.push("/");
    }
  }, [isLoggedIn]);
  return <>xxxx</>;
};

Stories.layout = "AuthUserLayout";

export default Stories;
