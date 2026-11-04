import styles from "./Hero.module.css";

export function HomeHero() {
  return (
    <section className={styles.homeHero}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTextTitle}>
            <b>Your</b> esports. <b>Your</b> matches.
          </h1>
          <p className={styles.heroTextSubtitle}>
            Select your favorite games, championships, teams, and players to follow
            matches in real time.
          </p>
        </div>
    </section>
  );
}
