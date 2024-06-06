import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";
import styles from "../scss/components/ProjectList.module.scss";

export interface ProjectItem {
  name: string;
  description?: string;
  skills: Array<string>;
  source: string;
}

let projectList: Array<ProjectItem> = projects;

const listStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const projectItemList = projectList.map((item, id) => (
  <ProjectItem key={id} item={item} />
));

const ProjectList = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      {/* <p>Projects will go here</p> */}
      <div className={styles.projects} style={listStyle}>
        {projectItemList}
      </div>
    </section>
  );
};

export default ProjectList;
