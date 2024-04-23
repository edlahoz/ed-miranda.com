import React, { FC } from "react";
import styles from "./Content.module.scss";

interface ContentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Content: FC<ContentProps> = ({ children, style, className = "" }) => (
  <div
    className={`${styles.Content} ${className}`}
    data-testid="Content"
    style={style}
  >
    {children}
  </div>
);

export default Content;
