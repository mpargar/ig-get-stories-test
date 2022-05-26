import { IIgStory } from "../FacebookContext";

interface IStoryComponent extends IIgStory {}
const Story = ({ media_url, timestamp, permalink, id }: IStoryComponent) => {
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
        <li>timestamp: {timestamp}</li>
        <li>
          <a href={permalink} target="_blank" rel="noreferrer">
            Perma link {permalink}
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Story;
