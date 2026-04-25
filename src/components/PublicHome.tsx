"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Clients from "./Clients";
import AccredianEdge from "./AccredianEdge";
import Cat from "./Cat";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import EnquireForm from "./EnquireForm";

const PublicHome = () => {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  return (
    <div>
      <section id="home">
        <Hero onOpenEnquire={() => setIsEnquireOpen(true)} />
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
        <FAQ onOpenEnquire={() => setIsEnquireOpen(true)} />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>

      <EnquireForm
        open={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
      />
    </div>
  );
};

export default PublicHome;
