import React, { FC } from "react";
import styles from "./Contact.module.scss";
import Stat from "../../components/Stat/Stat";
import { Constants } from "../../constants";

const Contact: FC = () => (
  <ul className={styles.Contact} data-testid="Contact">
    {Constants.pages.contact.links.map((link) => (
      <li key={link.title}>
        <Stat title={link.title} value={link.value} encoded={link.encoded} />
      </li>
    ))}
  </ul>
);

export default Contact;
