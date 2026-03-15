import About from "./components/about";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Services from "./components/services";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Works />
    </>
  );
}
