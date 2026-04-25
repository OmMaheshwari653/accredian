import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Clients from "./Clients";
import AccredianEdge from "./AccredianEdge";
import Cat from "./Cat";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";

const PublicHome = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="accredian-edge">
        <AccredianEdge />
      </section>
      <section id="cat">
        <Cat />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faqs">
        <FAQ />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default PublicHome;
