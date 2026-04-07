import React from "react";
import Nav from "./component/Nav";

import Header from "./component/Header";
import { Home } from "./sections/Home";
import Me from "./sections/Me";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Testimonials from "./sections/Testimonial";
import Contacts from "./sections/Contacts";
import Footer from "./component/Footer";

export default function Proj() {
  return (
    <div className="">
      <Header />
      <Home />
      <Me />
      <Experience />
      <Project />
      <Testimonials />
      <Contacts />
      <Footer/>
    </div>
  );
}
