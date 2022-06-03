import { ReactNode } from "react";
import Head from "next/head";
import { Menu, Layout, MenuProps } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import styles from "./AuthUserLayout.module.scss";
import useLogin from "../../context/Facebook/hooks/useLogin";

const { Header, Content, Footer } = Layout;

interface IAuthUserLayout {
  children: ReactNode;
}
const AuthUserLayout = ({ children }: IAuthUserLayout) => {
  const { logout } = useLogin();
  const menuItems = [
    {
      label: "Logout",
      key: "logout",
    },
  ];
  const handleOnClick = async ({ key }: MenuInfo) => {
    switch (key) {
      case "logout":
        await logout();
        break;
    }
  };
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
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            className={styles.menu}
            onClick={handleOnClick}
          />
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>© 2012-2022 Distillery</Footer>
      </Layout>
    </>
  );
};

export default AuthUserLayout;
