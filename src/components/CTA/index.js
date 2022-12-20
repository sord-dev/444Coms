import React from "react";
import styles from './styles.module.css'

export function CTA({ options }) {
  const { text, style, size } = options;

  switch (style) {
    case "primary":
      return <PrimaryCTA {...{ text, size }} />;
      break;

    case "secondary":
      return <SecondaryCTA {...{ text, size }} />;
      break;

    default:
      return;
      break;
  }
}

const PrimaryCTA = ({ text = '', size = '' }) => {
  const sizeStyle = size === 'large' ? styles.buttonLarge : styles.button
  return <button className={`${styles.primary} ${sizeStyle}`}>{text}</button>;
};

const SecondaryCTA = ({ text = '', size = '' }) => {
  const sizeStyle = size === 'large' ? styles.buttonLarge : styles.button
  return <button className={`${styles.secondary} ${sizeStyle}`}>{text}</button>;
};
