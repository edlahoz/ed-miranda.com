import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { Constants } from "../../constants";
import { Page } from "../../types";
import Link from "../Link/Link";

const Navigation: FC = () => {
  const routes = Object.keys(Constants.pages)
    .map((routeNode) => ({
      id: routeNode,
      ...(Constants.pages as { [key: string]: any })[routeNode],
    }))
    .filter((route: Page) => route.includeInMenu)
    .map((route: Page) => (
      <li key={route.displayName}>
        {route.isExternal}
        {!route.isExternal ? (
          <NavLink to={route.path}>{route.displayName}</NavLink>
        ) : (
          <Link href={route.path} title={route.displayName} />
        )}
      </li>
    ));

  return (
    <nav className={styles.Navigation}>
      <ul data-testid="Navigation">{routes}</ul>
    </nav>
  );
};

export default Navigation;
