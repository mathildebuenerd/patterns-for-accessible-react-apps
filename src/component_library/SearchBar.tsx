"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./SearchBar.module.css";

const searchBarId = "search-bar-input";

import { AriaAttributes } from "react";
interface Props {
  ariaAttributes: AriaAttributes;
}

function CustomNav({ ariaAttributes }: Props) {
  return <nav {...ariaAttributes}>Nav</nav>;
}

function App() {
  return <CustomNav ariaAttributes={{ "aria-labelledby": "id" }} />;
}

export default function SearchBar() {
  const router = useRouter();
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission behavior
      search(event);
    }
  };

  const search = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    const searchUrl = new URL("/search", window.location.origin);
    searchUrl.searchParams.append("q", event.target.value);
    router.push(searchUrl.pathname + searchUrl.search);
  };

  return (
    <div className={styles.container}>
      <label
        className={`${styles.label} ${inputFocused ? styles.inputFocused : ""}`}
        htmlFor={searchBarId}
      >
        Search Pokémons
      </label>
      <input
        className={styles.input}
        id={searchBarId}
        type="search"
        onKeyDown={handleKeyDown}
        onFocus={() => setInputFocused(true)}
        onBlur={(event) => !event.target.value && setInputFocused(false)}
      />
    </div>
  );
}
