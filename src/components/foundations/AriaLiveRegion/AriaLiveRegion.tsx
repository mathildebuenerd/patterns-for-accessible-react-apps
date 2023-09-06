import { AriaRole } from "react";
import { useAriaLiveRegion } from "./useAriaLiveRegion";
import styles from "./AriaLiveRegion.module.css";

interface Props {
  role: AriaRole;
}

const id = "status-message-live";

export function AriaLiveRegion({ role }: Props) {
  const { text } = useAriaLiveRegion();

  return (
    <div className={styles.container} role={role} aria-live="polite" id={id}>
      {text}
    </div>
  );
}
