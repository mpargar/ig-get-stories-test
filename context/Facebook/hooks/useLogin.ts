/**
 * This hook assumes that it will be executed on a component that is wrapped by FacebookProvider.tsx
 */
import StatusResponse = facebook.StatusResponse;
import { useContext, useMemo } from "react";
import FacebookContext, { IFacebookAccountData } from "../FacebookContext";

const useLogin = () => {
  const [state, dispatch] = useContext(FacebookContext);
  const isLoggedIn = useMemo(
    () => state?.statusResponse?.status === "connected",
    [state?.statusResponse?.status]
  );
  const logout = async () => {
    //TODO: add promise...
    await FB.logout((response) => {
      if (response.status !== "connected") {
        dispatch({
          type: "setStatusResponse",
          payload: response,
        });
        dispatch({
          type: "setAccountData",
          payload: {
            accountsData: {} as IFacebookAccountData,
            instagramBussinessId: "",
          },
        });
      }
    });
  };
  return { isLoggedIn, logout };
};

export default useLogin;
