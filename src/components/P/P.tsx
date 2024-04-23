import React, { FC } from "react";
import styles from "./P.module.scss";

interface PProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

const P: FC<PProps> = ({ children, className = "", ...props }) => (
  <p className={`${styles.P} ${className}`} data-testid="P" {...props}>
    {children}
  </p>
);

export default P;
