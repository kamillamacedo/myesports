import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeHero } from "./components/Hero";
import { OptionsForm } from "./components/Form";

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
