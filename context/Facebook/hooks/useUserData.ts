import { useContext } from "react";
import facebookContext from "../FacebookContext";
import {
  getFacebookUserDataService,
  getInstagramAccountService,
} from "../../../services/facebookServices";

const useUserData = () => {
  const [state, dispatch] = useContext(facebookContext);
  const fetchUserData = async (token?: string) => {
    if (!token) token = state.statusResponse.authResponse.accessToken;
    const response = await getFacebookUserDataService(token);
    if (response.status === 200) {
      dispatch({
        type: "setAccountData",
        payload: {
          id: response?.data?.data?.[0]?.id,
          name: response?.data?.data?.[0]?.name,
        },
      });
      fetchInstagramData(response?.data?.data?.[0]?.id, token);
    }
  };
  const fetchInstagramData = async (accountDataId: string, token: string) => {
    const response = await getInstagramAccountService(accountDataId, token);
    if (response.status === 200) {
      dispatch({
        type: "setInstagramBussinessId",
        payload: response?.data?.instagram_business_account?.id,
      });
    }
  };
  return { fetchUserData };
};

export default useUserData;
