"use client";
import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import {
  FaLightbulb,
  FaUsers,
  FaLaptopCode,
  FaClipboardCheck,
  FaHandsHelping,
  FaSearch,
} from "react-icons/fa";

import { strategies } from "../../../utils/constant";

// Icon map
const Icons = {
  FaLightbulb: FaLightbulb,
  FaUsers: FaUsers,
  FaLaptopCode: FaLaptopCode,
  FaClipboardCheck: FaClipboardCheck,
  FaHandsHelping: FaHandsHelping,
  FaSearch: FaSearch,
};

const AcademicsStrategies = () => {
  return (
    <>
      <HeaderComponent title="Learning Strategies" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaLightbulb className="text-yellow-500" />
              Learning Strategies
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Paragraph */}
          <div className="prose prose-lg text-gray-700 leading-relaxed font-sans mb-10">
            <p>
              At The Usman Public School System, we implement innovative learning strategies to ensure that every student remains actively engaged, motivated, and able to reach their full potential. Our approach ensures learning is effective, enjoyable, and holistic, promoting academic, social, and emotional growth.
            </p>
          </div>

          {/* Icons Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((item, id) => {
              const Icon = Icons[item.icon];
              return (
                <div key={id} className="flex items-start gap-4">
                  <Icon className="text-blue-600 text-3xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default AcademicsStrategies;
