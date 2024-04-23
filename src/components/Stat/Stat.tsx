import React, { FC, useState } from "react";
import styles from "./Stat.module.scss";
import P from "../P/P";

interface StatProps {
  title: string;
  value: string;
  encoded?: boolean;
}

const Value: FC<StatProps> = ({ value, encoded, title }) => {
  const [decodedValue, setDecodedValue] = useState<string | null>(null);

  if (!encoded) {
    return (
      <a href={value} title={title} target="_blank">
        {value}
      </a>
    );
  }

  const decodeValue = () => {
    const decoded = atob(value);
    setDecodedValue(decoded);
  };

  if (decodedValue) {
    return (
      <a href={"mailto:" + decodedValue} title={title} target="_blank">
        {decodedValue}
      </a>
    );
  }

  return (
    <button className={styles.buttonValue} onClick={decodeValue}>
      Show Email
    </button>
  );
};

const Stat: FC<StatProps> = ({ title, value, encoded }) => {
  return (
    <div className={styles.Stat} data-testid="Stat">
      <P className={styles.title}>{title}</P>
      <P className={styles.value}>
        <Value value={value} encoded={encoded} title={title} />{" "}
        {!encoded && (
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
              stroke-width="2"
            />
            <line
              x1="16"
              y1="8"
              x2="8"
              y2="16"
              stroke="#ff4433"
              stroke-width="2"
            />
            <line
              x1="16"
              y1="8"
              x2="16"
              y2="16"
              stroke="#ff4433"
              stroke-width="2"
            />
            <line
              x1="16"
              y1="16"
              x2="8"
              y2="16"
              stroke="#ff4433"
              stroke-width="2"
            />
          </svg>
        )}
      </P>
    </div>
  );
};

export default Stat;
