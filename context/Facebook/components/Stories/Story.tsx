import GetStoryInsights from "../GetStoryInsights";
import { IIgStory } from "../../hooks/useStories";
import { Card, Tooltip } from "antd";
import { BarChartOutlined, LinkOutlined } from "@ant-design/icons";

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
  const handleShowInsights = () => {
    console.log("Show insights");
  };
  const handleOpenLink = () => {
    window?.open(permalink, "_blank")?.focus();
  };
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
      actions={[
        <Tooltip title="Insights" key={`insight-${ig_id}`}>
          <BarChartOutlined onClick={handleShowInsights} />
        </Tooltip>,
        <Tooltip title="Permalink" key={`link-${ig_id}`}>
          <LinkOutlined onClick={handleOpenLink} />
        </Tooltip>,
      ]}
    >
      <Card.Meta title={caption || "No caption"} description={`id: ${id}`} />
      <Card.Meta description={`ig_id: ${ig_id}`} />
      <Card.Meta description={timestamp} />
    </Card>
  );
};

export default Story;
