import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import styles from "./App.module.scss";
import variables from "../../variables.module.scss";
import ShowChildren from "../ShowChildren/ShowChildren";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Fire from "../Fire/Fire";
import PageName from "../PageName/PageName";

function App() {
  return (
    <div className={styles.App}>
      <Content style={{ borderRight: 0 }}>
        <Header />
        <Content
          style={{
            background: variables.colorSecondary,
            color: variables.colorTerminal,
            padding: "20px",
            fontFamily: "monospace",
          }}
          className="outlet"
        >
          <PageName />
          <Outlet />
        </Content>
      </Content>
      <ShowChildren breakpoint={768}>
        <Content
          style={{
            background: variables.colorPrimaryText,
            flex: 0.382,
            border: 0,
            padding: 0,
            borderRadius: 0,
          }}
        >
          <Navigation />
          <Fire />
        </Content>
      </ShowChildren>
    </div>
  );
}

export default App;
