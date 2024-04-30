import React, { FC, useState, useEffect } from "react";
import styles from "./Clock.module.scss";
import P from "../P/P";

interface ClockProps {}

const Clock: FC<ClockProps> = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line
  }, []);

  function getCurrentTime() {
    const date = new Date();
    const hours = formatTimeUnit(date.getHours());
    const minutes = formatTimeUnit(date.getMinutes());
    const seconds = formatTimeUnit(date.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatTimeUnit(unit: number) {
    return unit < 10 ? "0" + unit : unit;
  }

  return (
    <div className={styles.Clock} data-testid="Clock">
      <svg width="20" height="20" fill="none">
        <path
          d="M9.996 16.996a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334ZM3.065 10.663h13.87M3.065 13.996h13.87"
          stroke="#212121"
        ></path>
        <path
          d="M10 16.372c1.512 0 2.736-2.872 2.736-6.39 0-3.519-1.224-6.39-2.736-6.39C8.488 3.582 7.264 6.454 7.264 9.973c0 3.518 1.224 6.39 2.736 6.39Z"
          stroke="#212121"
        ></path>
      </svg>
      <P style={{ margin: 0 }}>{time}</P>
    </div>
  );
};

export default Clock;
