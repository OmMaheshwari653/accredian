"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";

type CategoryKey = "course" | "delivery" | "misc";

type FaqItem = {
  question: string;
  answer: string;
};

const categories: Array<{ key: CategoryKey; label: string }> = [
  { key: "course", label: "About the Course" },
  { key: "delivery", label: "About the Delivery" },
  { key: "misc", label: "Miscellaneous" },
];

const faqData: Record<CategoryKey, FaqItem[]> = {
  course: [
    {
      question:
        "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer expertise in various domains, including Leadership Development, Tech and Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],
  delivery: [
    {
      question: "How are training sessions delivered?",
      answer:
        "Programs can be delivered in online, hybrid, and onsite formats based on your team's availability and business requirements.",
    },
    {
      question: "Can learning paths be customized for different teams?",
      answer:
        "Yes. We tailor learning journeys for different roles, business units, and seniority levels to maximize relevance and outcomes.",
    },
  ],
  misc: [
    {
      question: "How do we get started with Accredian?",
      answer:
        "Share your business goals with our team, and we will propose an assessment-driven roadmap with a tailored implementation plan.",
    },
    {
      question: "Do you provide post-training support?",
      answer:
        "Yes. We support adoption with progress tracking, feedback loops, and follow-up recommendations for continuous skill growth.",
    },
  ],
};

type FAQProps = {
  onOpenEnquire: () => void;
};

const FAQ = ({ onOpenEnquire }: FAQProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("course");
  const [openQuestion, setOpenQuestion] = useState(0);
  const tabStripRef = useRef<HTMLDivElement>(null);

  const activeFaqs = useMemo(() => faqData[activeCategory], [activeCategory]);

  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategory(key);
    setOpenQuestion(0);
  };

  return (
    <div className="w-full flex justify-center mt-16 sm:mt-16 md:py-12 xl:px-12 px-4">
      <div className="w-full max-w-340">
        <div className="w-full">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col">
          <div className="w-full md:flex-[0.3] relative">
            <div
              ref={tabStripRef}
              className="md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col items-center gap-4 md:gap-6 max-w-[90vw] overflow-x-auto"
            >
              {categories.map((category) => {
                const isActive = category.key === activeCategory;

                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => handleCategoryChange(category.key)}
                    className={`w-full max-w-70 rounded-md px-4 py-4 text-center cursor-pointer border-2 ${
                      isActive
                        ? "drop-shadow-lg md:drop-shadow-xl bg-white border-blue-100"
                        : "border-neutral-300 bg-white"
                    }`}
                  >
                    <span
                      className={`text-sm whitespace-nowrap lg:text-lg font-semibold ${
                        isActive ? "text-blue-600" : "text-neutral-500"
                      }`}
                    >
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="absolute md:hidden block z-20 right-0 top-1/2 -translate-y-1/2 drop-shadow-lg border bg-white rounded-full p-1"
              aria-label="Scroll FAQ categories"
              onClick={() =>
                tabStripRef.current?.scrollBy({ left: 220, behavior: "smooth" })
              }
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="w-full md:flex-[0.7] md:px-4 flex flex-col">
            {activeFaqs.map((faq, index) => {
              const isOpen = openQuestion === index;

              return (
                <div
                  key={faq.question}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-3 py-3 px-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={onOpenEnquire}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
