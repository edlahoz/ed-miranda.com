import React, { FC } from "react";
import styles from "./Content.module.scss";

interface ContentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Content: FC<ContentProps> = ({ children, style }) => (
  <div className={styles.Content} data-testid="Content" style={style}>
    {children}
  </div>
);

export default Content;
