import useLoginStatus from "../hooks/useLoginStatus";
import useUserData from "../hooks/useUserData";

const FacebookSessionButton = () => {
  const { isLoggedIn, setStatus } = useLoginStatus();
  const { fetchUserData } = useUserData();
  const handleLogout = () => {
    FB.logout((response) => {
      setStatus(response);
    });
  };
  const handleLogin = () => {
    const permissions: string[] = [
      "read_insights",
      "pages_manage_instant_articles",
      "pages_show_list",
      "business_management",
      "instagram_basic",
      "instagram_manage_comments",
      "instagram_manage_insights",
      "instagram_manage_messages",
      "attribution_read",
      "pages_read_engagement",
      "pages_manage_metadata",
      "pages_read_user_content",
      "pages_manage_posts",
      "pages_manage_engagement",
      "public_profile",
    ];
    FB.login(
      function (response) {
        setStatus(response);
        fetchUserData(response?.authResponse?.accessToken);
      },
      {
        scope: permissions.join(","),
      }
    );
  };
  return isLoggedIn() ? (
    <button onClick={handleLogout}>Logout ❌</button>
  ) : (
    <button onClick={handleLogin}>Login ✅</button>
  );
};

export default FacebookSessionButton;
