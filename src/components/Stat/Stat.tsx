import React, { FC, useState } from "react";
import styles from "./Stat.module.scss";
import P from "../P/P";
import H4 from "../H4/H4";

type StatProps = {
  title: string;
  subtitle?: string;
  value: string;
  encoded?: boolean;
  isLink?: boolean;
  type?: "row" | "column";
  pills?: string[];
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="#ff4433"
    transform="rotate(-90)"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="#ff4433"
      strokeWidth="2"
    />
    <line x1="16" y1="8" x2="8" y2="16" stroke="#ff4433" strokeWidth="2" />
    <line x1="16" y1="8" x2="16" y2="16" stroke="#ff4433" strokeWidth="2" />
    <line x1="16" y1="16" x2="8" y2="16" stroke="#ff4433" strokeWidth="2" />
  </svg>
);

function ValueTemplate({ value, title, isLink, encoded }: StatProps) {
  if (!isLink) {
    return <>{value}</>;
  }
  return (
    <>
      <a
        href={!encoded ? value : "mailto:" + value}
        title={title}
        target="_blank"
        rel="noreferrer"
      >
        {value}
      </a>{" "}
      <ArrowIcon />
    </>
  );
}

const Value: FC<StatProps> = ({ value, encoded, title, subtitle, isLink }) => {
  const [decodedValue, setDecodedValue] = useState<string | null>(null);

  if (!encoded) {
    return ValueTemplate({ value, title, isLink });
  }

  const decodeValue = () => {
    const decoded = atob(value);
    setDecodedValue(decoded);
  };

  if (decodedValue) {
    return ValueTemplate({ value: decodedValue, title, isLink, encoded });
  }

  return (
    <button className={styles.buttonValue} onClick={decodeValue}>
      Show Email
    </button>
  );
};

const Stat: FC<StatProps> = (props) => {
  return (
    <div
      className={`${styles.Stat} ${
        props.type ? styles[props.type] : styles.row
      }`}
      data-testid="Stat"
    >
      <P className={styles.title}>{props.title}</P>
      <div>
        {props.subtitle && (
          <H4 className={styles.subtitle}>{props.subtitle}</H4>
        )}
        <P className={styles.value}>
          <Value {...props} />
        </P>
        {props.pills && (
          <div className={styles.pills}>
            {props.pills.map((pill, index) => (
              <span key={index} className={styles.pill}>
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stat;
