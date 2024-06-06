import { useEffect, useState } from "react";
import { fetchUserProfile } from "../githubApi/GithubApiHandler";
import styles from "../scss/components/Profile.module.scss";
import { CircleLoader } from "react-spinners";

interface GithubUser {
  avatar_url: string;
  public_repos: number;
}

const sec = 1000;

const githubUserName = "dawid200272";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState<GithubUser | undefined>(undefined);

  useEffect(() => {
    const getUserAsync = async () => {
      let user = await fetchUserProfile(githubUserName);

      console.log("user", user);
      setUserData(user);
    };

    setTimeout(() => {
      getUserAsync();
      setIsLoaded(true);
    }, 3 * sec);
  }, [userData]);

  return (
    <section className={styles.container} id="profile">
      <div>
        <h2 className={styles.title}>My Github Profile</h2>
      </div>
      <div className={styles.profileDataContainer}>
        {isLoaded ? (
          <div>
            {userData?.avatar_url !== undefined ? (
              <img
                className={styles.imageContainer}
                src={userData.avatar_url}
                alt="github profile image"
              />
            ) : (
              ""
            )}
            <div className={styles.text}>
              <h3>Username: {githubUserName}</h3>
              <h3>Public repos: {userData?.public_repos}</h3>
            </div>
            <div></div>
          </div>
        ) : (
          <div className={styles.loader}>
            <CircleLoader color="#fff" size={100} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
