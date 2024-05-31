import React, { FC } from "react";
import variables from "../../variables.module.scss";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill={variables.colorAccent}
    transform="rotate(-90)"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke={variables.colorAccent}
      strokeWidth="2"
    />
    <line
      x1="16"
      y1="8"
      x2="8"
      y2="16"
      stroke={variables.colorAccent}
      strokeWidth="2"
    />
    <line
      x1="16"
      y1="8"
      x2="16"
      y2="16"
      stroke={variables.colorAccent}
      strokeWidth="2"
    />
    <line
      x1="16"
      y1="16"
      x2="8"
      y2="16"
      stroke={variables.colorAccent}
      strokeWidth="2"
    />
  </svg>
);

type LinkProps = {
  href: string;
  title: string;
  style?: React.CSSProperties;
};

const Link: FC<LinkProps> = ({ href, title, style }) => (
  <span title="Opens in a new tab">
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid="Link"
      style={style}
    >
      {title}
    </a>{" "}
    <ArrowIcon />
  </span>
);

export default Link;
