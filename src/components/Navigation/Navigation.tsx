import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { constants_routes } from "../Router/Router";

const Navigation: FC = () => {
  const routes = Object.keys(constants_routes)
    .map((routeNode) => ({
      id: routeNode,
      ...constants_routes[routeNode as keyof typeof constants_routes],
    }))
    .map((route) => (
      <li key={route.id}>
        <NavLink to={route.path}>{route.displayName}</NavLink>
      </li>
    ));

  return (
    <ul className={styles.Navigation} data-testid="Navigation">
      {routes}
    </ul>
  );
};

export default Navigation;
