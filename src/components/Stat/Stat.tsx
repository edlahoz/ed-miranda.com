import React, { FC, useState } from "react";
import styles from "./Stat.module.scss";
import P from "../P/P";
import H4 from "../H4/H4";
import Link from "../Link/Link";

type StatProps = {
  title: string;
  subtitle?: string;
  value: string;
  encoded?: boolean;
  isLink?: boolean;
  type?: "row" | "column";
  pills?: string[];
};

function ValueTemplate({ value, title, isLink, encoded }: StatProps) {
  if (!isLink) {
    return <>{value}</>;
  }
  return (
    <>
      <Link href={!encoded ? value : "mailto:" + value} title={value} />
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
