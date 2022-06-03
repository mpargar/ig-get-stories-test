import { createContext, Dispatch } from "react";
import StatusResponse = facebook.StatusResponse;
import { TFacebookReducerAction } from "./facebookReducer";

export interface IFacebookAccountData {
  id: string;
  name: string;
}

export interface IIgStory {
  id: string;
  username: string;
  media_url: string;
  media_type: string;
  media_product_type: string;
  comments_count: string;
  timestamp: string;
  owner: {
    id: string;
  };
  ig_id: string;
  shortcode: string;
  permalink: string;
}

export interface IFacebookContextState {
  statusResponse: StatusResponse;
  accountsData?: IFacebookAccountData;
  instagramBussinessId: string;
}
export type IFacebookContext = [
  IFacebookContextState,
  Dispatch<TFacebookReducerAction>
];

const FacebookContext = createContext<IFacebookContext>([
  {} as IFacebookContextState,
  () => {},
] as IFacebookContext);

export default FacebookContext;
