import { type AriaRole, useState, useEffect } from "react";
import { useAriaLiveRegion } from "./useAriaLiveRegion";
import styles from "./AriaLiveRegion.module.css";

interface Props {
  role: AriaRole;
}

const id = "status-message-live";

export function AriaLiveRegion({ role }: Props) {
  const [message, setMessage] = useState(""); // Add state for the message
  const { text } = useAriaLiveRegion();

  useEffect(() => {
    setMessage(text);

    // Remove the message after 5 seconds
    const timeout = setTimeout(() => setMessage(""), 5000);

    // Clean up the timeout when the component unmounts or the text changes
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className={styles.container} role={role} aria-live="polite" id={id}>
      {message}
    </div>
  );
}
