import React, { FC } from "react";
import styles from "./Home.module.scss";
import P from "../../components/P/P";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <P>Home Component</P>
  </div>
);

export default Home;
