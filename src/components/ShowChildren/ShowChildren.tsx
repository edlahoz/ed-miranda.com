import React, { FC, useState, useEffect } from "react";

interface ShowChildrenProps {
  children?: React.ReactNode;
  breakpoint: number;
  type?: string;
}

const ShowChildren: FC<ShowChildrenProps> = ({
  children,
  breakpoint,
  type,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (type === "hide") {
    return <>{windowWidth <= breakpoint && children}</>;
  }

  return <>{windowWidth > breakpoint && children}</>;
};

export default ShowChildren;
