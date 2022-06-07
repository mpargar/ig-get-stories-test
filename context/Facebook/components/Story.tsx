import GetStoryInsights from "./GetStoryInsights";
import { IIgStory } from "../hooks/useStories";

interface IStoryComponent extends IIgStory {}

const Story = ({
  media_url,
  timestamp,
  permalink,
  id,
  ig_id,
}: IStoryComponent) => {
  return (
    <div>
      <img
        src={media_url}
        alt={permalink}
        style={{
          maxWidth: "300px",
        }}
      />
      <ul>
        <li>id: {id}</li>
        <li>ig_id: {ig_id}</li>
        <li>timestamp: {timestamp}</li>
        <li>
          <a href={permalink} target="_blank" rel="noreferrer">
            Perma link {permalink}
          </a>
        </li>
      </ul>
      <GetStoryInsights id={id} />
      <hr />
    </div>
  );
};

export default Story;
