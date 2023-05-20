import React from "react";
import sideImage from "../images/sideImage.jpg";
import styles from "../App.module.css";

const SideImage = () => {
  const imageStyles = {
    height: "100%",
    width: "100%",
  };
  return (
    <div className={styles.displayNone}>
      <img style={imageStyles} alt="justice background" src={sideImage} />
    </div>
  );
};

export default SideImage;
