import useStories from "../hooks/useStories";
import Story from "./Story";
import { useContext, useEffect } from "react";
import FacebookContext from "../FacebookContext";

const Stories = () => {
  const [state] = useContext(FacebookContext);
  const { stories } = useStories();
  return (
    <>
      <h1>-{state.instagramBussinessId}-</h1>
      {stories.map((story) => (
        <Story {...story} key={story.id} />
      ))}
    </>
  );
};

export default Stories;
