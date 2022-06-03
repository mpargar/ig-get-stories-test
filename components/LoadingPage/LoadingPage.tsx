import styles from "./LoadingPage.module.scss";
import { Spin } from "antd";
const LoadingPage = () => {
  return (
    <Spin tip="Loading user data..." size="large">
      <div className={styles.loadingPage}></div>
    </Spin>
  );
};

export default LoadingPage;
