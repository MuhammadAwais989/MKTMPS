import React from 'react';
import HeaderComponent from '../../sections/HeaderComponent';
import { MdGroups2 } from "react-icons/md";

const AboutPTM = () => {
  return (
    <>
      <HeaderComponent title="PTM" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-16 pb-20">
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-2">
              <MdGroups2 className="text-blue-600" /> 
              Parent Teacher Meeting (PTM)
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Paragraph */}
          <div className="prose prose-lg text-gray-700 leading-relaxed font-sans">
            <p>
              Every student is expected to abide by the following rules and regulations.
              Breach of any one of the rules shall result in disciplinary action
              including expulsion from school and higher secondary school.
            </p>
              <br />
            <p>
              PTMs are a highly effective way of communication between parents and teachers.
              These meetings are held at least twice a term to thoroughly review the student’s
              performance, learning progress, behavior, and overall academic development.
              Attendance of parents in PTM is strictly mandatory.
            </p>

              <br />
            <p>
              Special orientations are conducted throughout the year to familiarize parents
              with teaching methods, assessments, and classroom strategies used in
              the Muslim Khatri Tameer-e-Millat Public School System. These meetings guide parents in enhancing their
              child’s learning at home, ensuring strong school–parent partnership.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutPTM;
