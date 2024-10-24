import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";


// Define a mapping for your icon names
const iconMap = {
  HiChatBubbleLeftRight: Icon3.HiChatBubbleLeftRight,
  BiWorld: Icon1.BiWorld,
  IoCall: Icon2.IoCall,
};

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with Us",
    description:
      "Our consultants are here to answer your questions about studying abroad.",
    details: "support@ecvc.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit Us",
    description: "Schedule a face-to-face consultation at our main office.",
    details: "456 Global Education Street, Dhaka, Bangladesh",
  },
  {
    icon: "IoCall",
    heading: "Call Us",
    description: "Available Monday to Friday from 9am to 6pm",
    details: "+880 1234 567890",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-gray-900 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        const Icon = iconMap[ele.icon];
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-gray-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-gray-5">
                {ele.heading}
              </h1>
            </div>
            <p className="font-medium">{ele.description}</p>
            <p className="font-semibold">{ele.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
