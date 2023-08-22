"use client";

import { useRouter, useSearchParams } from "next/navigation";

import styles from "./SearchBar.module.css";

const searchBarId = "search-bar-input";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

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
      <label className={styles.label} htmlFor={searchBarId}>
        Search Pokémons
      </label>
      <input
        className={styles.input}
        id={searchBarId}
        type="search"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
