import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { CTA } from '../CTA'

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.hero_content} container`}>
        <div>
        <h1>Have your best call</h1>
        <p>Fast, reliable & simple conference calls from all around the world.</p>

        <div className={styles.action_list}>
          <CTA options={{ text: 'Try it Free', style: 'primary', size:'large' }} />
          <CTA options={{ text: 'Get a Demo', style: 'secondary', size: 'large'}} />
        </div>
        </div>


        <Image src={"/hero-img.png"} width={620} height={620} />
      </div>
    </div>
  );
}
