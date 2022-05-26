import useStory from "../hooks/useStory";

interface IGetStoryInsights {
  id: string;
}
const GetStoryInsights = ({ id }: IGetStoryInsights) => {
  const { fetchInsight, insights } = useStory();
  const handleClick = () => {
    fetchInsight(id);
  };
  return (
    <>
      <button onClick={handleClick}>Get insights</button>
      <ul>
        {insights.map((insight) => (
          <li key={insight.id}>
            <p>
              <b>{insight.title}: </b> {insight.description}.
            </p>
            <p>
              <b>Valores:</b>
            </p>
            <ul>
              {insight.values.map((value, index) => (
                <li key={`${insight.id}-value-${index}`}>{value.value}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
export default GetStoryInsights;
