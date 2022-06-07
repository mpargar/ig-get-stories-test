import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useLogin from "../context/Facebook/hooks/useLogin";
import Router from "next/router";
import Stories from "../context/Facebook/components/Stories/Stories";
const InstagramStories: NextPage & { layout: string } = () => {
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

InstagramStories.layout = "AuthUserLayout";

export default InstagramStories;
