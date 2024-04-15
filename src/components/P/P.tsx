import React, { FC } from "react";
import styles from "./P.module.scss";

interface PProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const P: FC<PProps> = ({ children, ...props }) => (
  <p className={styles.P} data-testid="P" {...props}>
    {children}
  </p>
);

export default P;
