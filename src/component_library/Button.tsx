"use client";
import {
  type AriaAttributes,
  type PropsWithChildren,
  forwardRef,
  RefObject,
  ForwardedRef,
} from "react";
import styles from "./Button.module.css";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
  ariaAttributes: AriaAttributes;
}

export const Button = forwardRef(function Button(
  { children, type = "button", onClick, ariaAttributes }: Props,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={styles.primary}
      type={type}
      onClick={onClick}
      {...ariaAttributes}
    >
      {children}
    </button>
  );
});
