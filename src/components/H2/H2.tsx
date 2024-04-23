import React, { FC } from "react";
import styles from "./H2.module.scss";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

const H2: FC<H2Props> = ({ children, className = "", ...props }) => (
  <h2 className={`${styles.H2} ${className}`} data-testid="H2" {...props}>
    {children}
  </h2>
);

export default H2;
