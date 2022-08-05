
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NaBar from "./components/NaBar";
import Porrtfolio from "./components/Porrtfolio";
import Socials from "./components/Socials";


function App() {
  return (
    <div>
      <NaBar/>
      <Home/>
    <About/>
    <Porrtfolio/>
    <Experience/>
    <Contact/>
      <Socials/>
    </div>
  );
}

export default App;
