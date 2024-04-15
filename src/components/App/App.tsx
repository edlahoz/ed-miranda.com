import React from "react";
import Logo from "../Logo/Logo";
import Content from "../Content/Content";
import styles from "./App.module.scss";
import variables from "../../variables.module.scss";
import ShowChildren from "../ShowChildren/ShowChildren";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Content>
        <Logo />
        <Content
          style={{
            background: variables.colorSecondary,
            color: variables.colorSecondaryText,
            padding: 0,
          }}
        >
          <Outlet />
        </Content>
      </Content>
      <ShowChildren breakpoint={768}>
        <Content
          style={{
            background: variables.colorPrimaryText,
            flex: 0.5,
          }}
        >
          <Navigation />
        </Content>
      </ShowChildren>
    </div>
  );
}

export default App;
