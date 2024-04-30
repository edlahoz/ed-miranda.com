import React, { FC, useEffect, useState } from "react";
import H1 from "../H1/H1";
import H2 from "../H2/H2";
import { Link } from "react-router-dom";
import ShowChildren from "../ShowChildren/ShowChildren";
import Navigation from "../Navigation/Navigation";
import variables from "../../variables.module.scss";
import styles from "./Header.module.scss";
import { Constants } from "../../constants";
import Clock from "../Clock/Clock";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  return (
    <header className={styles.Header} data-testid="Header">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <H1 style={{ margin: "0 0 5px 0" }}>
            <Link
              to={Constants.pages.home.path}
              style={{ color: variables.colorAccent }}
            >
              {Constants.header.title}
            </Link>
          </H1>
          <H2 style={{ margin: "0 0 10px 0" }}>{Constants.header.subtitle}</H2>
        </div>
        <ShowChildren breakpoint={768}>
          <Clock />
        </ShowChildren>
        <ShowChildren type="hide" breakpoint={768}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${styles["button-menu"]} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2"
              />
            </svg>
          </button>
        </ShowChildren>
      </div>
      <ShowChildren type="hide" breakpoint={768}>
        {isMenuOpen && <Navigation />}
      </ShowChildren>
    </header>
  );
};

export default Header;
