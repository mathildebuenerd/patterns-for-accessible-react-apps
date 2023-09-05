"use client";
import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
}

export default function Button({ children, type = "button", onClick }: Props) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
