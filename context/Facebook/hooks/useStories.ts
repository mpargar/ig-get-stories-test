import { useContext, useEffect, useState } from "react";
import FacebookContext from "../FacebookContext";
import { getIgStoriesService } from "../../../services/facebookServices";

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

const useStories = () => {
  const [state] = useContext(FacebookContext);
  const [stories, setStories] = useState<IIgStory[]>([]);
  const fetchStories = async () => {
    if (!state.instagramBussinessId) return;
    const response = await getIgStoriesService(
      state.instagramBussinessId,
      state.statusResponse.authResponse.accessToken
    );
    if (response.status === 200) {
      setStories(response.data.data);
    } else {
      console.log(response);
    }
  };
  useEffect(() => {
    fetchStories();
  }, [state.instagramBussinessId]);
  return {
    fetchStories,
    stories,
  };
};

export default useStories;
