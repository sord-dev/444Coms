import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { CTA } from "../CTA";

export function OfferSection() {
  return (
    <div className={styles.offer_section}>
      <div className={`${styles.offer_section_content} container`}>
        <Image src={"/business.png"} width={530} height={370} />
        <div className={styles.content}>
          <h2>Perfect Solution for Small Businesses</h2>
          <p>Pricing plans that fit like a glove.</p>

          <div className={styles.action_list}>
            <CTA
              options={{ text: "Try it Free", style: "primary", size: "large" }}
            />
            <CTA
              options={{
                text: "Get a Demo",
                style: "secondary",
                size: "large",
                color: "black",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
