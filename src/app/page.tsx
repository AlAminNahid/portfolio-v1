import Header from "@/components/features/header";
import About from "@/components/features/about";
import Experience from "@/components/features/experience";
import Works from "@/components/features/works";
import Research from "@/components/features/research";
import Certificates from "@/components/features/certificates";
import Contact from "@/components/features/contact";
import NavBar from "@/components/layouts/navBar";
import Footer from "@/components/layouts/footer";
import { BackToTop } from "@/components/ui/ScrollUi";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <About />
        <Experience />
        <Works />
        <Research />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
