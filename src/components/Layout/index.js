import Link from "next/link";
import React from "react";
import { CTA } from "../CTA";
import styles from "./styles.module.css";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

function Navbar() {
  return (
    <div className={`${styles.navbar_container} container`}>
      <div className={styles.navbar}>
        <h2 className={styles.title}>
          <span className="green">444</span>Coms
        </h2>
        <span className={styles.spacer}></span>
        <nav className={styles.navlinks}>
          <Link className={styles.link} href={"#"}>
            Products
          </Link>
          <Link className={styles.link} href={"#"}>
            Resources
          </Link>
          <Link className={styles.link} href={"#"}>
            Get a Demo
          </Link>
          <Link className={styles.link} href={"#"}>
            Contact
          </Link>
        </nav>
      </div>

      <div className={styles.button_group}>
        <CTA
          options={{ text: "Sign In", style: "secondary" }}
        />
        <CTA
          options={{ text: "Free Trial", style: "primary" }}
        />
      </div>
    </div>
  );
}
