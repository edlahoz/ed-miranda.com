import React, { FC, useState, useEffect } from "react";
import styles from "./Accordion.module.scss";
import H3 from "../H3/H3";

export type AccordionItem = {
  title: string;
  content: JSX.Element;
  defaultOpen?: boolean;
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const defaultOpenIndex = items.findIndex((item) => item.defaultOpen);
    setActiveIndex(defaultOpenIndex);
  }, [items]);

  const activeIcon = (index: number) => (
    <span onClick={() => handleClick(index)} className={styles.icon}>
      {activeIndex === index ? "▼" : "-"}
    </span>
  );

  return (
    <ul className={styles.Accordion} data-testid="Accordion">
      {items.map((item, index) => (
        <li key={index} className={styles["accordion-item"]}>
          {activeIcon(index)}
          <H3
            className={`${styles["accordion-title"]} ${
              activeIndex === index ? styles["active"] : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </H3>
          <div
            className={`${styles["accordion-content"]} ${
              activeIndex === index ? styles["open"] : ""
            }`}
          >
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
