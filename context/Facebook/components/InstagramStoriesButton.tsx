import useLoginStatus from "../hooks/useLoginStatus";
import {
  getIgMediaById,
  getIgStoriesService,
} from "../../../services/facebookServices";
import { useContext } from "react";
import FacebookContext from "../FacebookContext";

const InstagramStoriesButton = () => {
  const [state, dispatch] = useContext(FacebookContext);
  const { isLoggedIn } = useLoginStatus();
  const handleOnclick = async () => {
    const response = await getIgStoriesService(
      state.instagramBussinessId,
      state.statusResponse.authResponse.accessToken
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: "setStories",
        payload: response.data.data,
      });
    }
  };
  return isLoggedIn() ? (
    <button onClick={handleOnclick}>Fetch stories</button>
  ) : null;
};

export default InstagramStoriesButton;
