import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export function Benefits() {
  return (
    <section className={`${styles.benefits} container`}>
      <h2>Instant Conference Calls</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <Image src={'/app-view.png'} width={'1014'} height={'600'}/>
    </section>
  );
}
