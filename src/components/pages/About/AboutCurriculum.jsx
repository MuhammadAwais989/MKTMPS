import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import { FaBrain, FaHands, FaHeart } from "react-icons/fa";

const AboutCurriculum = () => {
  return (
    <>
      <HeaderComponent title="Curriculum Approach" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaBrain className="text-blue-600" />
              Curriculum Approach
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Paragraph */}
          <div className="prose prose-lg text-gray-700 leading-relaxed font-sans mb-10">
            <p>
              We focus on nurturing students across all three domains of learning: <strong>cognitive, psychomotor, and affective</strong>, with special emphasis on the <strong>affective domain</strong>.
            </p>

            <p>
              Our goal is to develop students who are confident, reflective, and capable of making decisions guided by the teachings of Islam. Character development is given the highest value and importance.
            </p>

            <p>
              Islamic teachings are integrated across all subjects, not limited to Islamiat. Relevant <strong>Ayat, Ahadith, and Islamic concepts</strong> are shared alongside academic content to provide a holistic learning experience.
            </p>
          </div>

          {/* Icon Features Section */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Cognitive Domain */}
            <div className="flex items-start gap-4">
              <FaBrain className="text-blue-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Cognitive Domain: Knowledge & Understanding
              </p>
            </div>

            {/* Psychomotor Domain */}
            <div className="flex items-start gap-4">
              <FaHands className="text-green-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Psychomotor Domain: Skills & Actions
              </p>
            </div>

            {/* Affective Domain */}
            <div className="flex items-start gap-4">
              <FaHeart className="text-red-500 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Affective Domain: Character & Values
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCurriculum;
