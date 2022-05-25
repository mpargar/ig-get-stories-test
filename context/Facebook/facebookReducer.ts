import {
  IFacebookAccountData,
  IFacebookContextState,
  IIgStory,
} from "./FacebookContext";
import StatusResponse = facebook.StatusResponse;

export type TFacebookReducerAction =
  | {
      type: "setStatusResponse";
      payload: StatusResponse;
    }
  | {
      type: "setAccountData";
      payload: IFacebookAccountData;
    }
  | {
      type: "setInstagramBussinessId";
      payload: string;
    }
  | {
      type: "setStories";
      payload: IIgStory[];
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
        accountsData: action.payload,
      };
    case "setInstagramBussinessId":
      return {
        ...state,
        instagramBussinessId: action.payload,
      };
    case "setStories": {
      return {
        ...state,
        stories: action.payload,
      };
    }
    default:
      return state;
  }
};
export default facebookReducer;
