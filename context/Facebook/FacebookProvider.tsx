import { ReactNode, useReducer, useState } from "react";
import Script from "next/script";
import FacebookContext, {
  IFacebookAccountData,
  IFacebookContextState,
} from "./FacebookContext";
import facebookReducer from "./facebookReducer";
import StatusResponse = facebook.StatusResponse;
import { getFacebookUserDataService } from "../../services/facebookServices";
import useUserData from "./hooks/useUserData";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

interface IFacebookProvider {
  children: ReactNode;
}

const INITIAL_STATE: IFacebookContextState = {
  statusResponse: {
    status: "unknown",
  } as StatusResponse,
  accountsData: {} as IFacebookAccountData,
  instagramBussinessId: "",
};

const FacebookProvider = ({ children }: IFacebookProvider) => {
  const [facebookState, dispatch] = useReducer(facebookReducer, INITIAL_STATE);
  const { fetchUserData, fetchInstagramData } = useUserData();
  const [loaded, setLoaded] = useState(false);
  const handleOnLoad = () => {
    window.fbAsyncInit = async function () {
      // Start app
      FB.init({
        appId: "1157734634795050",
        cookie: true,
        xfbml: true,
        version: "v13.0",
      });
      FB.AppEvents.logPageView();
      // Get login status
      await FB.getLoginStatus(async (response) => {
        dispatch({
          type: "setStatusResponse",
          payload: response,
        });
        await getAccountData(response);
      });
      setLoaded(true);
    };
  };
  const getAccountData = async (status: StatusResponse) => {
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
      dispatch({
        type: "setAccountData",
        payload: {
          accountsData: userData,
          instagramBussinessId: igData,
        },
      });
    }
  };
  return (
    <>
      <Script
        id="facebook-jssdk"
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={handleOnLoad}
      />
      {loaded ? (
        <FacebookContext.Provider value={[facebookState, dispatch]}>
          {children}
        </FacebookContext.Provider>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default FacebookProvider;
