import React from "react";
import MainMenu from "./MainMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["layout-padding"]}>
      <MainMenu />
    </div>
  );
};

export default Header;
