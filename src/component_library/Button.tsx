"use client";
import { AriaAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
  ariaAttributes: AriaAttributes;
}

export default function Button({
  children,
  type = "button",
  onClick,
  ariaAttributes,
}: Props) {
  return (
    <button
      className={styles.primary}
      type={type}
      onClick={onClick}
      {...ariaAttributes}
    >
      {children}
    </button>
  );
}
