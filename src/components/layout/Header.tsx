import Link from "next/link";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    fontFamily: "Nabla, cursive",
    fontSize: "2em",
    fontVariationSettings: "'EDPT' 50",
    backgroundColor: "var(--color-blue)",
    padding: "0 12px",
    borderRadius: "10px",
    border: "5px solid var(--color-yellow)",
    boxShadow: "0px 0px 0px 4px var(--color-pink)",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
  },
  navItems: {
    padding: "10px 20px",
  },
};

export default function Header() {
  return (
    <header style={styles.container}>
      <div style={styles.logo}>
        <Link style={styles.logoLink} href="/">
          pokéapp
        </Link>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li>
            <a style={styles.navItems} href="#">
              Login
            </a>
          </li>
          <li>
            <a style={styles.navItems} href="#">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
