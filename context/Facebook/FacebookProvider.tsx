import { ReactNode, useReducer, useState } from "react";
import Script from "next/script";
import FacebookContext, {
  IFacebookAccountData,
  IFacebookContextState,
} from "./FacebookContext";
import facebookReducer from "./facebookReducer";
import StatusResponse = facebook.StatusResponse;

interface IFacebookProvider {
  children: ReactNode;
}

const INITIAL_STATE: IFacebookContextState = {
  statusResponse: {
    status: "unknown",
  } as StatusResponse,
  accountsData: {} as IFacebookAccountData,
  instagramBussinessId: "",
  stories: [],
};

const FacebookProvider = ({ children }: IFacebookProvider) => {
  const [loaded, setLoaded] = useState(false);
  const handleOnLoad = () => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1157734634795050",
        cookie: true,
        xfbml: true,
        version: "v13.0",
      });
      FB.AppEvents.logPageView();
      setLoaded(true);
    };
  };
  const [facebookState, dispatch] = useReducer(facebookReducer, INITIAL_STATE);
  return (
    <>
      <Script
        id="facebook-jssdk"
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={handleOnLoad}
      />
      {loaded && (
        <FacebookContext.Provider value={[facebookState, dispatch]}>
          {children}
        </FacebookContext.Provider>
      )}
    </>
  );
};

export default FacebookProvider;
