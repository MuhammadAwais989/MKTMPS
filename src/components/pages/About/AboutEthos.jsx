"use client";
import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import {
  FaUsers,
  FaHandHoldingHeart,
  FaBookOpen,
  FaPrayingHands,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const AboutEthos = () => {
  const ethosPoints = [
    {
      icon: <FaUsers className="text-blue-600 text-3xl mt-1" />,
      title: "Inclusive Community",
      desc: "We foster a mini Muslim community where every individual is treated with fairness and respect.",
    },
    {
      icon: <FaHandHoldingHeart className="text-teal-600 text-3xl mt-1" />,
      title: "Nurturing Talents",
      desc: "Each student’s unique talents are recognized, valued, and developed, while their specific needs are accommodated.",
    },
    {
      icon: <FaPrayingHands className="text-purple-600 text-3xl mt-1" />,
      title: "Islamic Principles",
      desc: "Guided by Islamic values, we emphasize a caring environment where staff and students support each other and the wider community.",
    },
    {
      icon: <FaBookOpen className="text-green-600 text-3xl mt-1" />,
      title: "Holistic Curriculum",
      desc: "Our curriculum promotes spiritual, moral, intellectual, physical, and cultural growth of every pupil.",
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-3xl mt-1" />,
      title: "Discipline & Safety",
      desc: "With clear behavior policies and anti-bullying strategies, we encourage respect, integrity, and good manners.",
    },
    {
      icon: <FaStar className="text-yellow-500 text-3xl mt-1" />,
      title: "Character Building",
      desc: "We aim to develop responsible, empathetic, and confident students who contribute positively to society.",
    },
  ];

  return (
    <>
      <HeaderComponent title="Ethos & Values" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaUsers className="text-blue-600" />
              Ethos & Values
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Paragraph */}
          <div className="prose prose-lg text-gray-700 leading-relaxed font-sans mb-10">
            <p>
              The Muslim Khatri Tameer-e-Millat Public School System fosters a nurturing mini Muslim community where every individual is treated with fairness and respect. 
              Each student’s unique talents are recognized, valued, and developed, while their specific needs are thoughtfully accommodated. 
            </p>
            <p>
              Guided by Islamic principles, the school emphasizes a caring and compassionate environment where both staff and students engage with the needs of others and the wider community. 
              Our curriculum supports the spiritual, moral, intellectual, physical, and cultural growth of every pupil, promoting holistic education.
            </p>
            <p>
              With a strong focus on discipline, anti-bullying, and courteous behavior, we encourage all students to act with respect, integrity, and good manners at all times.
            </p>
          </div>

          {/* Icon Features Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {ethosPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {point.icon}
                <div>
                  <p className="font-semibold text-gray-800">{point.title}</p>
                  <p className="text-gray-700">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutEthos;
