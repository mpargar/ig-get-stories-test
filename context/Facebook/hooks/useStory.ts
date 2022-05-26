import { getStoryInsightsService } from "../../../services/facebookServices";
import { useContext, useState } from "react";
import facebookContext from "../FacebookContext";
interface IStoryInsight {
  description: string;
  id: string;
  name: string;
  period: string;
  title: string;
  values: Array<{ value: number }>;
}
const useStory = () => {
  const [state] = useContext(facebookContext);
  const [insights, setInsights] = useState<IStoryInsight[]>([]);
  const fetchInsight = async (id: string) => {
    const response = await getStoryInsightsService(
      id,
      state.statusResponse.authResponse.accessToken
    );
    if (response.status === 200) {
      setInsights(response.data?.data);
    }
  };
  return {
    fetchInsight,
    insights,
  };
};
export default useStory;
