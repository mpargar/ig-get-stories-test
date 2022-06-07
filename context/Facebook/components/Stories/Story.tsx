import GetStoryInsights from "../GetStoryInsights";
import { IIgStory } from "../../hooks/useStories";
import { Card } from "antd";

interface IStoryComponent extends IIgStory {}

const Story = ({
  media_url,
  timestamp,
  permalink,
  id,
  ig_id,
  media_type,
  caption,
}: IStoryComponent) => {
  // return (
  //   <div>
  //     <img
  //       src={media_url}
  //       alt={permalink}
  //       style={{
  //         maxWidth: "300px",
  //       }}
  //     />
  //     <ul>
  //       <li>id: {id}</li>
  //       <li>ig_id: {ig_id}</li>
  //       <li>timestamp: {timestamp}</li>
  //       <li>
  //         <a href={permalink} target="_blank" rel="noreferrer">
  //           Perma link {permalink}
  //         </a>
  //       </li>
  //     </ul>
  //     <GetStoryInsights id={id} />
  //     <hr />
  //   </div>
  // );
  return (
    <Card
      style={{ width: 300 }}
      cover={
        media_type === "VIDEO" ? (
          <video autoPlay loop muted>
            <source src={media_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={media_url} alt={permalink} />
        )
      }
    >
      <Card.Meta title={caption || "No caption"} description={`id: ${id}`} />
      <Card.Meta description={`ig_id: ${ig_id}`} />
      <Card.Meta description={timestamp} />
    </Card>
  );
};

export default Story;
