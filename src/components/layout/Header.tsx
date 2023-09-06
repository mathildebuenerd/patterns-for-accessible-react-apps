import Link from "next/link";

import styles from "./Header.module.css";
import SearchBar from "@/component_library/SearchBar";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Pokédex</Link>
      </div>
      <SearchBar />
    </header>
  );
}
