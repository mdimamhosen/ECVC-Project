import React from "react";
import CTAButton from "../Core/CTAButton";

const LearningGridArray = [
  {
    order: -1,
    heading: "Empowering International Education for",
    highliteText: "Students Worldwide",
    description:
      "ECVC partners with top universities and institutions to offer comprehensive guidance and support for students aiming to study abroad.",
    BtnText: "Explore Services",
    BtnLink: "/services",
  },
  {
    order: 1,
    heading: "Personalized Study Abroad Guidance",
    description:
      "Save time and reduce stress! ECVC provides personalized consultancy services, tailored to each student’s educational and career goals.",
    BtnLink: "/services",
  },
  {
    order: 2,
    heading: "Comprehensive Application Assistance",
    description:
      "Our team helps you every step of the way—from selecting the right university to preparing your application and visa documentation.",
    BtnLink: "/services",
  },
  {
    order: 3,
    heading: "Secure Admission to Top Universities",
    description:
      "ECVC's network of partnerships ensures students have access to prestigious institutions worldwide, with the highest chances of acceptance.",
    BtnLink: "/services",
  },
  {
    order: 4,
    heading: "Real-Time Progress Monitoring",
    description:
      "We provide real-time updates on your application status, empowering you to track your progress throughout the admission process.",
    BtnLink: "/services",
  },
  {
    order: 5,
    heading: "24/7 Expert Support",
    description:
      "Our dedicated support team is available 24/7 to answer any questions and help you overcome challenges during your study abroad journey.",
    BtnLink: "/services",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-12 pb-8">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-gray-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-gray-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="lg:text-4xl text-2xl text-gray-200 font-semibold ">
                  {card.heading}
                  {/* <HighlightText text={card.heading} /> */}
                </div>
                <p className="text-gray-400 font-medium text-sm">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-gray-200 font-semibold text-lg">
                  {card.heading}
                </h1>

                <p className="text-gray-400 font-medium text-sm ">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
