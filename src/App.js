import AboutMe from "./components/AboutMe/AboutMe";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <form>
      <WelcomePage></WelcomePage>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contacts></Contacts>

    </form>
  );
}

export default App;
