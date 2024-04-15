import React, { FC, useState, useEffect } from "react";

interface ShowChildrenProps {
  children?: React.ReactNode;
  breakpoint: number;
}

const ShowChildren: FC<ShowChildrenProps> = ({ children, breakpoint }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 30);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{windowWidth > breakpoint && children}</>;
};

export default ShowChildren;
