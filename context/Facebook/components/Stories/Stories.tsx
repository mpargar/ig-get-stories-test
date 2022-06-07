import useStories from "../../hooks/useStories";
import Story from "./Story";
import { useContext, useEffect } from "react";
import FacebookContext from "../../FacebookContext";
import styles from "./Story.module.scss";

const Stories = () => {
  const { stories } = useStories();
  return (
    <div className={styles.storyContainer}>
      {stories.map((story) => (
        <Story {...story} key={story.id} />
      ))}
    </div>
  );
};

export default Stories;
