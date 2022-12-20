import React from "react";
import styles from './styles.module.css'

export function CTA({ options }) {
  const { text, style, size, color } = options;

  switch (style) {
    case "primary":
      return <PrimaryCTA {...{ text, size, color }} />;
      break;

    case "secondary":
      return <SecondaryCTA {...{ text, size, color }} />;
      break;

    default:
      return;
      break;
  }
}

const PrimaryCTA = ({ text = '', size = '', color = '' }) => {
  const sizeStyle = size === 'large' ? styles.buttonLarge : styles.button
  return <button style={{ color }} className={`${styles.primary} ${sizeStyle}`}>{text}</button>;
};

const SecondaryCTA = ({ text = '', size = '', color = '' }) => {
  const sizeStyle = size === 'large' ? styles.buttonLarge : styles.button
  return <button style={{ color }} className={`${styles.secondary} ${sizeStyle}`}>{text}</button>;
};
