// import "./App.css";
import TechnologyList from "./components/TechnologyList";
import ProjectList from "./components/ProjectList";
import styles from "./scss/components/App.module.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <TechnologyList />
      <ProjectList />
      <Profile />
      <Contact />
    </div>
  );
}

export default App;
