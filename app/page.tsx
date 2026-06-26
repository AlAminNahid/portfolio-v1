import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Research from "./components/research";
import Services from "./components/services";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Works />
      <Research />
      <Contact />
      <Footer />
    </>
  );
}
