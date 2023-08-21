"use client";

import { useRouter, useSearchParams } from "next/navigation";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "10px",
  },
  input: {
    border: "1px solid lightgrey",
    fontSize: "1.1em",
    padding: "10px",
    marginBottom: "20px",
  },
};

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
    <div style={styles.container}>
      <label style={styles.label} htmlFor={searchBarId}>
        Search Pokémons
      </label>
      <input
        style={styles.input}
        id={searchBarId}
        type="search"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
