import React from "react";
import HighlightText from "../Core/HighlightText";

const Quote = () => {
  return (
    <div className="text-lg md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-gray-200">
      We are committed to guiding students towards a successful international
      education journey. Our trusted consultancy{" "}
      <HighlightText text={"merges expertise"} />,{" "}
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        {" "}
        personalized counseling
      </span>
      , and dedicated support to provide an
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        outstanding study abroad experience.
      </span>
    </div>
  );
};

export default Quote;
