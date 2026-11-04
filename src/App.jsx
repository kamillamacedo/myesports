
import Header from "./components/Header";
import Footer from "./components/Footer";

function SearchForm() {
  return (
    <form className="home-card">
      <fieldset>
        <legend className="home-card__options__container__title">
          Select your options
        </legend>
      
      <label htmlFor="sport" className="home-card__options">Sport</label>
      <input
        id="sport"
        className="home-card__inputs"
        type="text"
        placeholder="Which game would you like to follow?"
      />
      
      <label htmlFor="championship" className="home-card__options">Championship</label>
      <input
        id="championship"
        className="home-card__inputs"
        type="text"
        placeholder="Select a championship (optional)"
      />
      
      <label htmlFor="team" className="home-card__options">Team</label>
      <input
        id="team"
        className="home-card__inputs"
        type="text"
        placeholder="Select a team (optional)"
      />

      <label htmlFor="player" className="home-card__options">Player</label>
      <input
        id="player"
        className="home-card__inputs"
        type="text"
        placeholder="Select a player (optional)"
      />
      </fieldset>

      <button className="home-card__viewbutton" type="submit">
        <img
          className="home-card__viewbutton__eyeicon"
          src="/assets/view-icon.png"
        />
        View matches
      </button>
    </form>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1 className="hero-text__title">
              <b>Your</b> esports. <b>Your</b> matches.
            </h1>
            <p className="hero-text__subtitle">
              Select your favorite games, championships, teams, and players to
              follow matches in real time.
            </p>
          </div>
        </section>
        <section className="home-card__container">
          <SearchForm />
        </section>
        <section className="hero-spacer"></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
