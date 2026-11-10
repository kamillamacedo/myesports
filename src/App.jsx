import styles from "./App.module.css";

import { Header, Footer, HomeHero, OptionsForm } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <section className={styles.homeCardContainer}>
          <OptionsForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
