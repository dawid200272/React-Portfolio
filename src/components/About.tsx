import styles from "../scss/components/About.module.scss";
import about from "../data/about.json";

export interface AboutItem {
  title: string;
  description: string;
}

let aboutItems: Array<AboutItem> = about;

const aboutItemList = aboutItems.map((item, id) => (
  <li key={id} className={styles.aboutItem}>
    <div className={styles.aboutItemText}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </li>
));

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>{aboutItemList}</ul>
      </div>
    </section>
  );
};

export default About;
