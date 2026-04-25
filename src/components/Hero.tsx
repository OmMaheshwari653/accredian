import { CircleCheck } from "lucide-react";
import Image from "next/image";

const heroPoints = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
  "Measurable Impact",
];

type HeroProps = {
  onOpenEnquire: () => void;
};

const Hero = ({ onOpenEnquire }: HeroProps) => {
  return (
    <div className="flex w-full justify-center items-start">
      <div className="mx-auto w-full max-w-340">
        <div className="flex justify-center items-center my-4 mt-20 sm:mt-32 xl:px-12 sm:px-4 mb-10 md:mb-0">
          <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between sm:gap-4 md:gap-8 lg:gap-12 shadow-card overflow-visible">
            <div className="flex w-full flex-col justify-between gap-4 p-4 sm:ml-7 sm:w-1/2 sm:gap-4 sm:p-0 md:gap-8 md:ps-2 lg:gap-10 lg:ps-8">
              <h1 className="max-w-full cursor-context-menu px-8 pt-2 text-center text-2xl font-bold capitalize sm:max-w-87.5 sm:px-0 sm:text-left sm:text-4xl lg:max-w-175 lg:text-6xl">
                Next-Gen <span className="text-blue-600">Expertise</span> for
                Your
                <span className="text-blue-600"> Enterprise</span>
              </h1>

              <p className="w-full max-w-full p-2 text-center text-sm font-medium text-gray-700 sm:max-w-87.5 sm:p-0 sm:text-start sm:text-lg md:font-normal lg:text-2xl">
                Cultivate high-performance teams through expert learning.
              </p>

              <ul className="mx-auto grid grid-cols-2 gap-4 sm:mx-0 sm:flex sm:flex-wrap sm:justify-start">
                {heroPoints.map((point, index) => (
                  <li
                    key={point}
                    className={`mb-2 flex items-center gap-2 ${
                      index === 3 ? "sm:hidden" : ""
                    }`}
                  >
                    <CircleCheck className="h-6 w-6 text-green-600" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex justify-center sm:mb-0 sm:justify-start">
                <button
                  type="button"
                  onClick={onOpenEnquire}
                  className="w-[80%] rounded-lg bg-blue-600 p-1.75 text-md font-normal text-white shadow-md sm:w-42.5"
                >
                  <p className="text-sm md:text-xl">Enquire Now</p>
                </button>
              </div>
            </div>

            <div className="flex w-full justify-center sm:w-1/2 sm:items-end sm:justify-end">
              <Image
                src="/hero.webp"
                alt="headerImage"
                width={640}
                height={640}
                className="h-[80%] w-[80%] sm:h-full sm:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
