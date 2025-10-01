import React from "react";
import { Hero } from "./sections/Hero";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black max-w-7xl">
      <Nav />
      <Hero
        name="Samuel"
        role="A Fullstack Developer"
        description="A fullstack developer with solid foundations in design. Passionate about
        crafting seamless user experiences. I thrive at the intersection of
        creativity and functionality."
      />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
