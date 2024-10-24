import React from "react";
import ContactDetails from "../../Components/Contact/ContactDetails";
import ContactMap from "../../Components/Contact/ContactMap";
import ContactForm from "../../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="bg-slate-800">
      <div className="mx-auto py-16 w-11/12 max-w-maxContent text-white ">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Contact Details */}
          <div className="lg:w-[40%] flex flex-col justify-between  lg:p-6 rounded-lg">
            <ContactDetails />
            <ContactMap />
          </div>

          {/* Contact Form */}
          <div className="lg:w-[60%] bg-slate-800 p-6 rounded-lg flex-grow min-h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
