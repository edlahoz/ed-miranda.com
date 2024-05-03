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
    const dayOfWeek = getDayName(date.getDay());
    const day = formatTimeUnit(date.getDate());
    const month = getMonthName(date.getMonth());
    const { hours12, period } = get12HourTime(date.getHours());
    const minutes = formatTimeUnit(date.getMinutes());
    return `${dayOfWeek} ${month} ${day} ${hours12}:${minutes} ${period}`;
  }

  function formatTimeUnit(unit: number) {
    return unit.toString().padStart(2, "0");
  }

  function getMonthName(month: number) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[month];
  }

  function getDayName(day: number) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[day];
  }

  function get12HourTime(hours: number) {
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return { hours12, period };
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
