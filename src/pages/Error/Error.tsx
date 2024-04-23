import React, { FC } from "react";
import H2 from "../../components/H2/H2";
import P from "../../components/P/P";
import { Link } from "react-router-dom";
import { Constants } from "../../constants";

const Error: FC = () => {
  return (
    <div id="error-page">
      <P>
        <b>{Constants.pages.error.m1}</b> {Constants.pages.error.m2}{" "}
      </P>
      <P>
        <Link to={Constants.pages.home.path}>{Constants.pages.error.m3}</Link>
      </P>
    </div>
  );
};

export default Error;
