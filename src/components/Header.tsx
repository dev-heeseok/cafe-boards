import React from "react";
import MainNav from "./MainNav";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["layout-padding"]}>
      <MainNav />
    </div>
  );
};

export default Header;
