import React, { FC } from "react";
import styles from "./H3.module.scss";

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

const H3: FC<H3Props> = ({ children, className = "", ...props }) => (
  <h3 className={`${styles.H3} ${className}`} data-testid="H3" {...props}>
    {children}
  </h3>
);

export default H3;
