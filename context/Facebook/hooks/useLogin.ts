/**
 * This hook assumes that it will be executed on a component that is wrapped by FacebookProvider.tsx
 */
import StatusResponse = facebook.StatusResponse;
import { useContext, useEffect } from "react";
import FacebookContext from "../FacebookContext";

const useLogin = () => {
  const [state, dispatch] = useContext(FacebookContext);
  const isLoggedIn = () => state?.statusResponse?.status === "connected";
  const setStatus = (status: StatusResponse) => {
    dispatch({
      type: "setStatusResponse",
      payload: status,
    });
  };
  const getStatus = () => {
    FB.getLoginStatus((response) => {
      setStatus(response);
    });
  };
  useEffect(() => {
    getStatus();
  }, []);
  return { getStatus, isLoggedIn, setStatus };
};

export default useLogin;
