import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useLogin from "../context/Facebook/hooks/useLogin";
import Router from "next/router";
import Stories from "../context/Facebook/components/Stories";
const FacebookStories: NextPage & { layout: string } = () => {
  const { isLoggedIn } = useLogin();
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/facebook-login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <Stories />
    </>
  );
};

FacebookStories.layout = "AuthUserLayout";

export default FacebookStories;
