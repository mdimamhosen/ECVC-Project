import React from "react";
import ContactUsForm from "./ContactUsForm ";
import HighlightText from "../Core/HighlightText";

const ContactForm = () => {
  return (
    <div className="border border-gray-600 bg-slate-900 text-gray-700 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-gray-200 ">
        Have a Cause? Let&apos;s Work Together for a Better Future
      </h1>
      <p className="text-base text-gray-200 font-bold">
        Share your ideas on how{" "}
        <span>
          <HighlightText text={"ECVC"} />
        </span>{" "}
        can support your cause and create a positive impact across communities.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
