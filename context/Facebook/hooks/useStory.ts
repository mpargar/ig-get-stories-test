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
interface IFetchInsightProps {
  onFetchSuccess?: (response: IStoryInsight[]) => void;
  // TODO: Implements on fetch fails
  onFetchFails?: () => void;
}
const useStory = () => {
  const [state] = useContext(facebookContext);
  const [insights, setInsights] = useState<IStoryInsight[]>([]);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const fetchInsight = async (id: string, props: IFetchInsightProps) => {
    setLoadingInsights(true);
    const response = await getStoryInsightsService(
      id,
      state.statusResponse.authResponse.accessToken
    );
    if (response.status === 200) {
      setInsights(response.data?.data);
      props.onFetchSuccess && props.onFetchSuccess(response.data?.data);
    }
    setLoadingInsights(false);
  };
  return {
    fetchInsight,
    insights,
    loadingInsights,
  };
};
export default useStory;
