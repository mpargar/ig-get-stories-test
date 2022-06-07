import { IIgStory } from "../../hooks/useStories";
import { Card, List, Modal, Spin, Tooltip } from "antd";
import { BarChartOutlined, LinkOutlined } from "@ant-design/icons";
import useStory from "../../hooks/useStory";

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
  const { fetchInsight, loadingInsights } = useStory();
  const handleShowInsights = () => {
    fetchInsight(id, {
      onFetchSuccess: (insights) => {
        Modal.info({
          width: "100%",
          title: "Insights",
          content: (
            <List
              dataSource={insights}
              renderItem={(storyInsight) => (
                <List.Item>
                  <List.Item.Meta
                    title={`${storyInsight.title}: ${storyInsight.values?.[0]?.value}`}
                    description={storyInsight.description}
                  />
                </List.Item>
              )}
            />
          ),
        });
      },
    });
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
        <Spin spinning={loadingInsights} key={`insight-${ig_id}`}>
          <Tooltip title="Insights">
            <BarChartOutlined onClick={handleShowInsights} />
          </Tooltip>
        </Spin>,
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
