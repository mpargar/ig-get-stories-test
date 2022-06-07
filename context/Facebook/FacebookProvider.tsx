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
import useLogin from "./hooks/useLogin";

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
  const [loaded, setLoaded] = useState(false);
  const { getAccountData } = useLogin();
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
        // TODO: Change the dispatchOverride patch functionality
        await getAccountData(response, dispatch);
      });
      setLoaded(true);
    };
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
