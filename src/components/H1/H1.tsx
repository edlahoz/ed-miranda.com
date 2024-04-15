import React, { FC } from "react";
import styles from "./H1.module.scss";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const H1: FC<H1Props> = ({ children, ...props }) => (
  <h1 className={styles.H1} data-testid="H1" {...props}>
    {children}
  </h1>
);

export default H1;
