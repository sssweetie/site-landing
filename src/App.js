import styles from "./styles.module.css";
import AboutMe from "./components/AboutMe/AboutMe";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <form>
      <WelcomePage className={styles.app}></WelcomePage>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
    </form>
  );
}

export default App;
