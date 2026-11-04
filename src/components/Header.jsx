import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <img
        className={styles.headerLogo}
        src="/assets/logocolor.png"
        alt="Myesports logo"
      />
      <nav className={styles.headerMenu}>
        <input
          className={styles.headerMenuSearchbar}
          type="search"
          placeholder="Search..."
          aria-label="Search bar" 
        />
        <a className={styles.headerMenuLink} href="index.html">
          Home
        </a>
        <button
          className={styles.loginButton}
          href="/login"
        >
          Log in
        </button>
      </nav>
    </header>
  );
}

export default Header;
