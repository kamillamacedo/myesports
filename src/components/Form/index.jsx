import styles from "./Form.module.css";

function InputGroup({id, label, ...props }){
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.inputGroupLabel}>
        {label}
      </label>

      <input
        id={id}
        name={id}
        className={styles.inputGroupInput}
        {...props}
      />
    </div>
  )
}


export function OptionsForm() {
  return (
    <form className={styles.homeCard}>
      <fieldset>
        <legend className={styles.homeCardTitle}>Select your options</legend>

        <InputGroup
          id="sport"
          label="Sport"
          type="text"
          placeholder="Which game would you like to follow?"
          required
        />

        <InputGroup
          id="championship"
          label="Championship"
          type="text"
          placeholder="Select a championship (optional)"
        />

        <InputGroup
          id="team"
          label="Team"
          type="text"
          placeholder="Select a team (optional)"
        />

        <InputGroup
          id="player"
          label="Player"
          type="text"
          placeholder="Select a player (optional)"
        />

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
