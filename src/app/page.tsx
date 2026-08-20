import Header from "@/components/features/header";
import Capabilities from "@/components/features/capabilities";
import About from "@/components/features/about";
import Experience from "@/components/features/experience";
import Works from "@/components/features/works";
import Research from "@/components/features/research";
import Contact from "@/components/features/contact";
import NavBar from "@/components/layouts/navBar";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Capabilities />
      <About />
      <Experience />
      <Works />
      <Research />
      <Contact />
      <Footer />
    </>
  );
}
