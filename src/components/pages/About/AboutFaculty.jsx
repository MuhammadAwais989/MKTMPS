import React, { useState } from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import { IoChevronDown } from "react-icons/io5";
import {accordionData} from '../../../utils/constant'

const AboutFaculty = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

 

  return (
    <>
      <HeaderComponent title="Faculty" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide">
              Faculty
            </h1>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Accordion Items */}
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-[#dce6ff] rounded-xl mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left text-[17px] font-semibold text-[#1d3b71] transition-all duration-300 
                  ${
                    openIndex === index
                      ? "bg-[#f5f9ff]"
                      : "bg-white hover:bg-[#f9fbff]"
                  }
                `}
              >
                {item.title}

                <IoChevronDown
                  className={`text-2xl text-[#1d3b71] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content with Smooth Slide */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out 
                  ${
                    openIndex === index
                      ? "max-h-[400px] opacity-100 py-4"
                      : "max-h-0 opacity-0 py-0"
                  }
                `}
              >
                <p className="px-6 text-gray-600 text-[15px] leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutFaculty;
