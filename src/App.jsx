import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import {OptionsForm} from "./components/Form";


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
        <section className={styles.homeCardContainer }>
          <OptionsForm/>
        </section>
        <section className="hero-spacer"></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
