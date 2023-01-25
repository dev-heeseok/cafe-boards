import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles["layout-container"]}>
      <div className={styles["layout-header"]}>
        <MainNavbar />
      </div>
      <div className={styles["layout-item"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
