import React, { FC } from "react";
import H1 from "../H1/H1";
import H2 from "../H2/H2";
import { Link } from "react-router-dom";
import { constants_routes } from "../Router/Router";

const Logo: FC = () => (
  <>
    <H1 style={{ margin: "0 0 5px 0" }}>
      <Link to={constants_routes.home.path}>Ed Miranda</Link>
    </H1>
    <H2 style={{ margin: "0 0 10px 0" }}>Frontend Development</H2>
  </>
);

export default Logo;
