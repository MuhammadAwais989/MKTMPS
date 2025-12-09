// components/Academics.jsx
"use client";
import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import { academicsData } from "../../../utils/constant";
import { FaBookOpen } from "react-icons/fa";

const Academics = () => {
  return (
    <>
      <HeaderComponent title="Academics" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaBookOpen className="text-blue-600" />
              Academics
            </h1>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Sections */}
          <div className="space-y-14">
            {academicsData.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {item.subjects && (
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {item.subjects.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Academics;
