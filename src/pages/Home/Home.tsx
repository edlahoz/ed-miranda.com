import React, { FC } from "react";
import styles from "./Home.module.scss";
import P from "../../components/P/P";
import H2 from "../../components/H2/H2";
import Accordion from "../../components/Accordion/Accordion";
import { Constants } from "../../constants";

const Home: FC = () => {
  return (
    <div className={styles.Home} data-testid="Home">
      <H2>{Constants.pages.home.m1}</H2>
      <P style={{ marginBottom: "40px" }}>{Constants.pages.home.m2}</P>
      <Accordion items={Constants.pages.home.accordionItems} />
    </div>
  );
};

export default Home;
