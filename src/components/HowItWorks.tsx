import { ChartNoAxesCombined, MonitorPlay, Presentation } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

const HowItWorks = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
          How We <span className="text-blue-600">Deliver Results</span> That
          Matter?
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1">
          A Structured Three-Step Approach to
          <span className="text-blue-600"> Skill Development</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full"
            >
              <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-blue-600 rounded-lg" />
              <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-blue-600 rounded-lg" />

              <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full flex justify-center items-center font-normal sm:font-bold text-center">
                <p>{step.number}</p>
              </div>

              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <h3 className="text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">
                {step.title}
              </h3>
              <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
