import styles from "./Footer.module.css";

function Footer() {
    return(
        <footer>
        <img
          className={styles.footerLogo}
          src="/assets/Logowhite.png"
          alt="Myesports logo"
        />
        <div className={styles.footerLinksContainer}>
          <a className={styles.footerLink} href="/about">
            About
          </a>
          <a className={styles.footerLink} href="/contact">
            Contact
          </a>
        </div>
      </footer>
    );  
};

export default Footer;