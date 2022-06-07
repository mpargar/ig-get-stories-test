/**
 * This hook assumes that it will be executed on a component that is wrapped by FacebookProvider.tsx
 */
import StatusResponse = facebook.StatusResponse;
import { Dispatch, useContext, useMemo, useState } from "react";
import FacebookContext, { IFacebookAccountData } from "../FacebookContext";
import useUserData from "./useUserData";
import { TFacebookReducerAction } from "../facebookReducer";
const permissions = [
  "read_insights",
  "pages_manage_instant_articles",
  "pages_show_list",
  "business_management",
  "instagram_basic",
  "instagram_manage_comments",
  "instagram_manage_insights",
  "instagram_manage_messages",
  "attribution_read",
  "pages_read_engagement",
  "pages_manage_metadata",
  "pages_read_user_content",
  "pages_manage_posts",
  "pages_manage_engagement",
  "public_profile",
];
const useLogin = () => {
  const { fetchUserData, fetchInstagramData } = useUserData();
  const [state, dispatch] = useContext(FacebookContext);
  const [loginLoading, setLoginLoading] = useState(false);
  const isLoggedIn = useMemo(
    () => state?.statusResponse?.status === "connected",
    [state?.statusResponse?.status]
  );
  const login = async () => {
    setLoginLoading(true);
    await FB.login(
      async (response) => {
        dispatch({
          type: "setStatusResponse",
          payload: response,
        });
        await getAccountData(response);
      },
      {
        scope: permissions.join(","),
      }
    );
    setLoginLoading(false);
  };
  // TODO: Change the dispatchOverride patch functionality
  const getAccountData = async (
    status: StatusResponse,
    dispatchOverride: Dispatch<TFacebookReducerAction> = dispatch
  ) => {
    if (status.status === "connected") {
      const userData = await fetchUserData(status?.authResponse.accessToken);
      if (!userData) {
        // TODO: Send error message
        return;
      }
      const igData = await fetchInstagramData(
        userData.id,
        status.authResponse.accessToken
      );
      if (!igData) {
        // TODO: Send error message
        return;
      }
      dispatchOverride({
        type: "setAccountData",
        payload: {
          accountsData: userData,
          instagramBussinessId: igData,
        },
      });
    }
  };
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
  return { isLoggedIn, logout, login, loginLoading, getAccountData };
};

export default useLogin;
