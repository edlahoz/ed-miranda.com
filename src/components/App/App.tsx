import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import styles from "./App.module.scss";
import ShowChildren from "../ShowChildren/ShowChildren";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Fire from "../Fire/Fire";
import PageName from "../PageName/PageName";

function App() {
  return (
    <div className={styles.App}>
      <Content className={styles.leftbar} style={{ borderRight: 0 }}>
        <Header />
        <Content className={styles.content}>
          <PageName />
          <Outlet />
        </Content>
      </Content>
      <ShowChildren breakpoint={768}>
        <Content className={styles.sidebar}>
          <Navigation />
          <Fire />
        </Content>
      </ShowChildren>
    </div>
  );
}

export default App;
