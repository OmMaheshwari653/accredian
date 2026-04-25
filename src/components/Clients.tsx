import Reveal from "./Reveal";

const clientLogos = [
  {
    src: "/rel.png",
    alt: "Reliance",
    className: "w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24",
  },
  {
    src: "/hcl.png",
    alt: "HCL",
    className: "w-16 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24",
  },
  {
    src: "/ibm.png",
    alt: "IBM",
    className: "w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24",
  },
  {
    src: "/crif.png",
    alt: "CRIF",
    className: "w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24",
  },
  {
    src: "/adp.svg",
    alt: "ADP",
    className: "w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24",
  },
  {
    src: "/bayer.svg",
    alt: "Bayer",
    className: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
  },
];

const Clients = () => {
  return (
    <section className="mt-8 sm:mt-28 xl:px-12 px-4 text-center">
      <div className="mx-auto w-full max-w-340">
        <Reveal direction="left" className="text-center mx-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto">
            Successful Collaborations With the
            <span className="text-blue-600"> Industry&apos;s Best</span>
          </p>
        </Reveal>

        <Reveal
          direction="right"
          className="w-full flex justify-center items-center mt-2"
          delay={0.08}
        >
          <ul className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-10">
            {clientLogos.map((logo) => (
              <li
                key={logo.alt}
                className="flex justify-center items-center p-2 md:p-3"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`object-contain ${logo.className}`}
                />
              </li>
            ))}
          </ul>

          <div className="sm:hidden overflow-hidden relative w-full">
            <div className="flex w-max mt-4 whitespace-nowrap animate-marquee will-change-transform">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="flex justify-center items-center px-8"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
