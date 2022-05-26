import useStories from "../hooks/useStories";
import Story from "./Story";

const Stories = () => {
  const { stories } = useStories();
  return (
    <>
      {stories.map((story) => (
        <Story {...story} key={story.id} />
      ))}
    </>
  );
};

export default Stories;
