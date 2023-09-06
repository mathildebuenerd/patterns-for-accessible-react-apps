"use client";
import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
  variant?: "primary";
}

export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
}: Props) {
  return (
    <button className={styles.primary} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
