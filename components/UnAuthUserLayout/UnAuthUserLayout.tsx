import Head from "next/head";
import styles from "./UnAuthuserLayout.module.scss";
import { Layout, Menu } from "antd";
import { ReactNode } from "react";
const { Header, Content, Footer } = Layout;
interface IUnAuthUserLayout {
  children: ReactNode;
}
const UnAuthUserLayout = ({ children }: IUnAuthUserLayout) => {
  return (
    <>
      <Head>
        <title>Ig insights</title>
        <meta name="description" content="Ig insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header className={styles.header}>
          <img src="/distillery.svg" alt="Distillery logo" />
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>© 2012-2022 Distillery</Footer>
      </Layout>
    </>
  );
};

export default UnAuthUserLayout;
