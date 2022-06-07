import { Button } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import useLogin from "../hooks/useLogin";

const FacebookLoginButton = () => {
  const { login, loginLoading } = useLogin();
  const handleOnClick = async () => {
    await login();
  };
  return (
    <Button
      loading={loginLoading}
      icon={<FacebookOutlined />}
      onClick={handleOnClick}
    >
      Login with facebook
    </Button>
  );
};

export default FacebookLoginButton;
