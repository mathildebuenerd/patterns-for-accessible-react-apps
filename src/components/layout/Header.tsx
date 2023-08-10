const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    backgroundColor: "var(--background-color-layout)",
    width: "30px",
    height: "30px",
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
      <div style={styles.logo}></div>
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
