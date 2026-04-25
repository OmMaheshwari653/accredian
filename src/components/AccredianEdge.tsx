import {
  Banknote,
  Briefcase,
  Brain,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  Globe,
  Lightbulb,
  MonitorCheck,
  MonitorX,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";

const AccredianEdge = () => {
  const desktopImage =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg";
  const mobileImage =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg";

  const expertiseCards = [
    { title: "Product & Innovation Hub", icon: Lightbulb },
    { title: "Gen-AI Mastery", icon: Brain },
    { title: "Leadership Elevation", icon: Users },
    { title: "Tech & Data Insights", icon: ChartNoAxesColumnIncreasing },
    { title: "Operations Excellence", icon: Settings },
    { title: "Digital Enterprise", icon: Globe },
    { title: "Fintech Innovation Lab", icon: Banknote },
  ];

  const whoShouldJoin = [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: MonitorCheck,
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: MonitorX,
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: GraduationCap,
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: Briefcase,
    },
  ];

  const segmentationCards = [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
      alt: "Program Specific",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
      alt: "Industry Specific",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
      alt: "Topic Specific",
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
      alt: "Level Specific",
    },
  ];

  const joinIllustration =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png";

  return (
    <>
      <section className="mt-12 px-4 md:px-8 xl:px-12">
        <div className="text-center pb-8 mx-2">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            Key Aspects of
            <span className="text-blue-600"> Our Strategic Training</span>
          </p>
        </div>

        <div className="w-full hidden sm:flex justify-center items-center mb-8">
          <Image
            src={desktopImage}
            alt="Our Solutions"
            width={1200}
            height={520}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="flex sm:hidden w-full justify-center items-center mb-8">
          <Image
            src={mobileImage}
            alt="Our Solutions"
            width={720}
            height={900}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="mt-12 sm:mt-24 mb-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 mx-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our<span className="text-blue-600"> Domain Expertise</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
              <span className="text-blue-600">Specialized Programs</span>{" "}
              Designed to Fuel Innovation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 w-full">
            {expertiseCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="p-2 w-[45%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg"
                >
                  <Icon className="text-blue-600 font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />
                  <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-28 md:mx-16 mb-10 bg-white text-center">
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
            Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {segmentationCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-lg border border-gray-300"
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={500}
                height={280}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-2xl font-semibold text-blue-600 px-6">
                {card.title}
              </h4>
              <p className="text-gray-600 hidden sm:block mt-2 text-sm px-6 pb-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10 bg-blue-600 sm:rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 pt-12 md:pl-6 text-white flex flex-col justify-between">
          <div>
            <h4 className="text-lg sm:text-xl font-medium">Who Should Join?</h4>
            <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
              Strategic Skill Enhancement
            </h1>
          </div>

          <div className="w-[300px] justify-center hidden md:block">
            <Image
              src={joinIllustration}
              alt="Human Illustration"
              width={300}
              height={300}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 py-12 text-white gap-10">
          {whoShouldJoin.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 sm:gap-2 flex-row sm:flex-col"
              >
                <Icon className="w-10 h-10 sm:w-14 sm:h-14 mb-2" />
                <div>
                  <h2 className="text-[16px] sm:text-[22px] font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-md text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AccredianEdge;
