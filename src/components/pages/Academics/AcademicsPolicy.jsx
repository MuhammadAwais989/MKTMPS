"use client";
import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import { FaBrain, FaRunning, FaLayerGroup } from "react-icons/fa";

const AcademicsPolicy = () => {
  return (
    <>
      <HeaderComponent title="Education Policy" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaBrain className="text-blue-600" />
              Education Policy
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Paragraph */}
          <div className="prose prose-lg text-gray-700 leading-relaxed font-sans mb-10">
            <p>
              The Muslim Khatri Tameer-e-Millat Public School System emphasizes holistic education, ensuring cognitive, psychomotor, and moral development across all levels. In pre-primary classes, reading and speaking are emphasized through a combination of phonics and sight-reading methodologies.
            </p>

            <p>
              Higher classes focus on developing higher-order thinking skills while reinforcing foundational knowledge. Multiple intelligences are incorporated in instructional planning to accommodate diverse learning styles.
            </p>

            <p>
              Younger students are provided with opportunities to enhance their gross and fine motor skills through structured activities, pre-writing exercises, physical play, and regular exercise. The integrated, theme-based curriculum in pre-primary classes covers social-emotional, language, scientific, mathematical, physical, and moral development, ensuring meaningful learning experiences.
            </p>
          </div>

          {/* Icon Features Section */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Cognitive Development */}
            <div className="flex items-start gap-4">
              <FaBrain className="text-blue-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Cognitive Development: Emphasis on reading, speaking, and higher-order thinking skills for diverse learners.
              </p>
            </div>

            {/* Psychomotor Development */}
            <div className="flex items-start gap-4">
              <FaRunning className="text-green-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Psychomotor Development: Structured activities, pre-writing exercises, and play enhance gross and fine motor skills.
              </p>
            </div>

            {/* Theme-Based Curriculum */}
            <div className="flex items-start gap-4">
              <FaLayerGroup className="text-purple-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Theme-Based Integrated Curriculum: Covers social-emotional, language, scientific, mathematical, physical, and moral development.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicsPolicy;
