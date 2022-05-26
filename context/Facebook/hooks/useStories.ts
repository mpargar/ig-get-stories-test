import { useContext } from "react";
import FacebookContext from "../FacebookContext";
import { getIgStoriesService } from "../../../services/facebookServices";

const useStories = () => {
  const [state, dispatch] = useContext(FacebookContext);
  const fetchStories = async () => {
    const response = await getIgStoriesService(
      state.instagramBussinessId,
      state.statusResponse.authResponse.accessToken
    );
    if (response.status === 200) {
      dispatch({
        type: "setStories",
        payload: response.data.data,
      });
    }
  };
  return {
    fetchStories,
    stories: state.stories,
  };
};

export default useStories;
