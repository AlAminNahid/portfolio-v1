import About from "@/components/features/about";
import Contact from "@/components/features/contact";
import Experience from "@/components/features/experience";
import Footer from "@/components/layouts/footer";
import Header from "@/components/features/header";
import NavBar from "@/components/layouts/navBar";
import Research from "@/components/features/research";
import Works from "@/components/features/works";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Experience />
      <Works />
      <Research />
      <Contact />
      <Footer />
    </>
  );
}
