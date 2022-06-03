import { IFacebookAccountData, IFacebookContextState } from "./FacebookContext";
import StatusResponse = facebook.StatusResponse;

export type TFacebookReducerAction =
  | {
      type: "setStatusResponse";
      payload: StatusResponse;
    }
  | {
      type: "setAccountData";
      payload: {
        accountsData: IFacebookAccountData;
        instagramBussinessId: string;
      };
    };

const facebookReducer = (
  state: IFacebookContextState,
  action: TFacebookReducerAction
): IFacebookContextState => {
  switch (action.type) {
    case "setStatusResponse":
      return {
        ...state,
        statusResponse: action.payload,
      };
    case "setAccountData":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default facebookReducer;
