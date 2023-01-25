import NavBar from "@/components/NavBar.jsx";
import Home from "@/components/Home";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About.jsx";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </>
  );
}

export default App;
