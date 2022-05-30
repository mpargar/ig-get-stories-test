import useLogin from "../hooks/useLogin";
import useStories from "../hooks/useStories";

const InstagramStoriesButton = () => {
  const { fetchStories } = useStories();
  const { isLoggedIn } = useLogin();
  const handleOnclick = async () => {
    await fetchStories();
  };
  return isLoggedIn() ? (
    <button onClick={handleOnclick}>Fetch stories</button>
  ) : null;
};

export default InstagramStoriesButton;
