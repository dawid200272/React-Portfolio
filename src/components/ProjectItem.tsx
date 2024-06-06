import React from "react";
import { ProjectItem as ItemType } from "./ProjectList";
import { Card } from "antd";
import styles from "../scss/components/ProjectItem.module.scss";

interface ProjectItemProps {
  item: ItemType;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
  return (
    <Card
      className={styles.container}
      title={<h2 className={styles.title}>{item.name}</h2>}
    >
      {item.description !== undefined ? (
        <p className={styles.description}>{item.description}</p>
      ) : (
        ""
      )}
      <ul className={styles.skills}>
        {item.skills.map((item, id) => (
          <li key={id} className={styles.skill}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={item.source} className={styles.link}>
          Source
        </a>
      </div>
    </Card>
  );
};

export default ProjectItem;
