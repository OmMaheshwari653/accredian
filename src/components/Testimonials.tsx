"use client";

import Image from "next/image";
import { ChevronRight, Headset } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const testimonialItems = [
  {
    logo: "/adp.svg",
    alt: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: "/bayer.svg",
    alt: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    logo: "/rel.png",
    alt: "Reliance",
    quote:
      "Choosing Accredian for the learning and development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials w-full mt-16 sm:mt-20 flex flex-col items-center">
      <Reveal direction="left" className="text-center mb-10 mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </Reveal>

      <Reveal direction="right" className="w-full px-4" delay={0.06}>
        <div className="mx-auto max-w-325 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(calc(${activeIndex} * -100%), 0, 0)`,
            }}
          >
            {testimonialItems.map((item) => (
              <div key={item.alt} className="w-full shrink-0 flex h-auto">
                <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-62.5 grow">
                  <div className="w-full flex flex-col justify-start items-start sm:pl-6 h-full">
                    <div className="h-16 mb-4 flex items-center gap-4">
                      <Image
                        src={item.logo}
                        alt={item.alt}
                        width={56}
                        height={56}
                        className="h-14 w-14 object-contain"
                      />
                    </div>
                    <p className="text-neutral-600 text-base font-light">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonialItems.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Reveal>

      <div
        id="supportSection"
        className="cta flex justify-center w-full mt-16 sm:mt-24 xl:px-12 px-4"
      >
        <div className="relative overflow-hidden border border-blue-600 w-full max-w-340 py-8 md:py-16 md:px-12 px-6 bg-blue-600 rounded-xl flex items-center md:justify-between md:flex-row flex-col gap-6">
          <Reveal
            direction="left"
            className="relative z-10 flex gap-8 md:flex-row flex-col md:items-start items-center"
            amount={0.3}
          >
            <div className="w-20 h-20 shrink-0 bg-slate-200/35 rounded-xl p-1">
              <div className="w-full h-full bg-white rounded-xl p-2">
                <Headset className="w-full h-full text-blue-600" />
              </div>
            </div>

            <div className="md:text-start text-center">
              <h1 className="text-xl md:text-3xl font-semibold text-white">
                Want to Learn More About Our Training Solutions?
              </h1>
              <h4 className="text-base hidden sm:block md:text-lg mt-2 max-w-xl font-medium text-neutral-100">
                Get Expert Guidance for Your Team&apos;s Success!
              </h4>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08} amount={0.3}>
            <button
              type="button"
              className="relative z-10 w-full max-w-50 py-2 sm:px-4 sm:py-3 mt-4 rounded-lg text-blue-500 bg-white text-xl font-semibold flex items-center justify-center gap-1"
            >
              Contact Us
              <ChevronRight size={20} />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
