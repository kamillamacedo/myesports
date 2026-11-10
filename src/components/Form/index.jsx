import styles from "./Form.module.css";

export function OptionsForm() {
  return (
    <form className={styles.homeCard}>
      <fieldset>
        <legend className={styles.homeCardTitle}>Select your options</legend>

        <div className={styles.inputGroup}>
          <label htmlFor="sport" className={styles.inputGroupLabel}>
            Sport
          </label>
          <input
            id="sport"
            className={styles.inputGroupInput}
            type="text"
            placeholder="Which game would you like to follow?"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="championship" className={styles.inputGroupLabel}>
            Championship
          </label>
          <input
            id="championship"
            className={styles.inputGroupInput}
            type="text"
            placeholder="Select a championship (optional)"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="team" className={styles.inputGroupLabel}>
            Team
          </label>
          <input
            id="team"
            className={styles.inputGroupInput}
            type="text"
            placeholder="Select a team (optional)"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="player" className={styles.inputGroupLabel}>
            Player
          </label>
          <input
            id="player"
            className={styles.inputGroupInput}
            type="text"
            placeholder="Select a player (optional)"
          />
        </div>
      </fieldset>

      <button className={styles.homeCardButton} type="submit">
        <img
          className={styles.homeCardButtonIcon}
          src="/assets/view-icon.png"
        />
        View matches
      </button>
    </form>
  );
}
