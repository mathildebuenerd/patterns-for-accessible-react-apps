"use client";
import styles from "./Button.module.css";

interface Props {
  label: string;
}

export default function Button({ label }: Props) {
  return <button>{label}</button>;
}
