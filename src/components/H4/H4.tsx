import React, { FC } from "react";
import styles from "./H4.module.scss";

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

const H4: FC<H4Props> = ({ children, className = "", ...props }) => (
  <h4 className={`${styles.H4} ${className}`} data-testid="H4" {...props}>
    {children}
  </h4>
);

export default H4;
