import logo from "../assets/hero/Wolf test.svg";
import styles from "../scss/components/Hero.module.scss";

export interface UserData {
  firstName: string;
  lastName: string;
  bio: JSX.Element;
  // bio: string;
}

let userData: UserData = {
  firstName: "Dawid",
  lastName: "Machaj",
  bio: (
    <p>
      Beginning programmer, game developer, and amateur artist and 3D model
      creator.
    </p>
  ),
};

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm {userData.firstName}</h1>
        {/* <div className={styles.description}>{userData.bio}</div> */}
        <p className={styles.description}>
          Beginning programmer, game developer, and amateur artist and 3D model
          creator.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:s59073@student.ubb.edu.pl"
        >
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={logo} alt="hero image" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
