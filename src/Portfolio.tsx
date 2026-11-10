import Header from "./component/Header";
import Footer from "./component/Footer";
import { Home } from "./sections/Home";
import Me from "./sections/Me";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Testimonials from "./sections/Testimonial";
import Contacts from "./sections/Contacts";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Me />
        <Experience />
        <Project />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
