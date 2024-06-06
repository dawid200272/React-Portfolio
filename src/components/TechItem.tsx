import React from "react";
import { TechItem as ItemType } from "./TechnologyList";
import { Card } from "antd";
import styles from "../scss/components/TechItem.module.scss";

interface TechItemProps {
  item: ItemType;
}
const assetsDirPath = "/src/assets/icons/";
const imageHeight = "10rem";

const TechItem: React.FC<TechItemProps> = ({ item }) => {
  const imageStyle: React.CSSProperties = {
    // maxHeight: "10rem",
    // maxWidth: "10rem",
    // minHeight: "5rem",
    // minWidth: "5rem",
    height: imageHeight,
    width: imageHeight,
  };

  const cardStyle: React.CSSProperties = {
    // backgroundColor: "#4f4e4e",
    // border: "solid #080808",
  };

  const iconPath = assetsDirPath + item.iconPath;

  // console.log("item", item);

  return (
    <Card
      className={styles.technology}
      style={cardStyle}
      title={<h2>{item.name}</h2>}
    >
      <div
        className={styles.technologyImageContainer}
        style={{ minWidth: "40%" }}
      >
        <img style={imageStyle} src={iconPath} />
      </div>
    </Card>
  );
};

export default TechItem;
