import { createContext, Dispatch } from "react";
import StatusResponse = facebook.StatusResponse;
import { TFacebookReducerAction } from "./facebookReducer";

export interface IFacebookAccountData {
  id: string;
  name: string;
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
