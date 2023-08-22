import Link from "next/link";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">pokéapp</Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a className={styles.navItems} href="#">
              Login
            </a>
          </li>
          <li>
            <a className={styles.navItems} href="#">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
