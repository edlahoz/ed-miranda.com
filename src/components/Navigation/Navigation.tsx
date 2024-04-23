import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { Constants } from "../../constants";

const Navigation: FC = () => {
  const routes = Object.keys(Constants.pages)
    .map((routeNode) => ({
      id: routeNode,
      ...(Constants.pages as { [key: string]: any })[routeNode],
    }))
    .filter((route) => route.includeInMenu)
    .map((route) => (
      <li key={route.id}>
        <NavLink to={route.path}>{route.displayName}</NavLink>
      </li>
    ));

  return (
    <nav className={styles.Navigation}>
      <ul data-testid="Navigation">{routes}</ul>
    </nav>
  );
};

export default Navigation;
