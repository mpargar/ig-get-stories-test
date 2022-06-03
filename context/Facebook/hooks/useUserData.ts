import { useContext } from "react";
import facebookContext, { IFacebookAccountData } from "../FacebookContext";
import {
  getFacebookUserDataService,
  getInstagramAccountService,
} from "../../../services/facebookServices";

const useUserData = () => {
  const fetchUserData = async (token: string) => {
    const response = await getFacebookUserDataService(token);
    if (response.status === 200) {
      return {
        id: response?.data?.data?.[0]?.id,
        name: response?.data?.data?.[0]?.name,
      };
    }
    return null;
  };
  const fetchInstagramData = async (accountDataId: string, token: string) => {
    const response = await getInstagramAccountService(accountDataId, token);
    if (response.status === 200) {
      return response?.data?.instagram_business_account?.id as string;
    }
    return null;
  };
  return { fetchUserData, fetchInstagramData };
};

export default useUserData;
