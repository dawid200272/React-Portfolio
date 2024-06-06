import TechItem from "./TechItem";
import techs from "../data/techs.json";
import styles from "../scss/components/TechnologyList.module.scss";

export interface TechItem {
  name: string;
  iconPath: string;
}

let technologies: Array<TechItem> = techs;

const ListStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

const techElementsList = technologies.map((item, id) => (
  <TechItem key={id} item={item} />
));

const TechnologyList = () => {
  return (
    <section className={styles.container} id="technologies">
      <h2 className={styles.title}>Technologies I know</h2>
      <div className={styles.content} style={ListStyle}>
        <div className={styles.technologies}>{techElementsList}</div>
      </div>
    </section>
  );
};

export default TechnologyList;
