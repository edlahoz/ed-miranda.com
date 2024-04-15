import React, { FC } from "react";
import H2 from "../../components/H2/H2";
import P from "../../components/P/P";
import { Link } from "react-router-dom";
import { constants_routes } from "../../components/Router/Router";

const Error: FC = () => {
  return (
    <div id="error-page">
      <H2 style={{ marginBottom: "5px" }}>Oops!</H2>
      <P style={{ margin: 0 }}>
        Sorry, but that page doesn't exist.{" "}
        <Link to={constants_routes.home.path}>
          Go back to the {constants_routes.home.displayName} page
        </Link>
      </P>
    </div>
  );
};

export default Error;
