import React, { FC } from "react";
import styles from "./PageName.module.scss";
import H2 from "../H2/H2";
import { useLocation } from "react-router-dom";
import { Constants } from "../../constants";
import { Page } from "../../types";

const PageName: FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const targetPage = Object.keys(Constants.pages).find((key: string) => {
    const page = Constants.pages[key as keyof typeof Constants.pages];
    return page.path === path;
  });
  const page: Page =
    Constants.pages[targetPage as keyof typeof Constants.pages];

  if (page.hideNameInHeader) return null;
  return (
    <H2 className={styles.PageName} data-testid="PageName">
      {page.displayName}
    </H2>
  );
};

export default PageName;
