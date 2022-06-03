import "antd/dist/antd.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import FacebookProvider from "../context/Facebook/FacebookProvider";
import AuthUserLayout from "../components/AuthUserLayout/AuthUserLayout";
import { ReactNode } from "react";
import { NextComponentType, NextPageContext } from "next";

const layouts = {
  AuthUserLayout,
};
interface IMyAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, any, {}> & {
    layout: "AuthUserLayout";
  };
}
function MyApp({ Component, pageProps }: IMyAppProps) {
  const Layout =
    layouts[Component.layout] ||
    (({ children }: { children: ReactNode }) => <>{children}</>);
  return (
    <>
      <FacebookProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FacebookProvider>
    </>
  );
}

export default MyApp;
