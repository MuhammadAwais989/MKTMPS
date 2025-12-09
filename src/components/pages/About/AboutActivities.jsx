import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import {
  FaSchool,
  FaFlask,
  FaBook,
  FaMicrophone,
  FaPalette,
  FaBus,
  FaHandsHelping,
} from "react-icons/fa";

const AboutActivities = () => {
  return (
    <>
      <HeaderComponent title="Activities" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaSchool className="text-blue-600" />
              Activities
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Paragraph */}
          <div className="prose prose-lg text-gray-700 leading-relaxed font-sans mb-10">
            <p>
              The Muslim Khatri Tameer-e-Millat Public School System is committed
              to developing the overall personality of students by encouraging
              creativity, confidence, and leadership. A well-planned Activity
              Calendar ensures that productive and engaging events are conducted
              throughout the year.
            </p>

            <p>
              Students participate in a wide range of activities such as Student
              Weeks, Educational Trips, Science Exhibitions, Spelling Bee
              Contests, Book Fairs, Debate & Speech Competitions, Poetry
              Elocution, Art Contests, and Creative Writing Competitions in both
              English and Urdu. Morning assemblies are regularly organized and
              conducted by the Student Council to enhance leadership and public
              speaking abilities.
            </p>

            <p>
              Senior boys are also provided the opportunity to join the annual
              Pakistan Study Tour. Additionally, the school organizes a Community
              Service Volunteer Program every year to build empathy, responsibility,
              and civic awareness among students.
            </p>
          </div>

          {/* Icon Features Section */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Science Fair
            <div className="flex items-start gap-4">
              <FaFlask className="text-blue-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Science Exhibitions & Experiments
              </p>
            </div> */}

            {/* Book Fairs */}
            <div className="flex items-start gap-4">
              <FaBook className="text-green-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Book Fairs & Creative Writing Competitions
              </p>
            </div>

            {/* Debates */}
            <div className="flex items-start gap-4">
              <FaMicrophone className="text-purple-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Debates, Speeches & Poetry Recitations
              </p>
            </div>

            {/* Art Competitions */}
            <div className="flex items-start gap-4">
              <FaPalette className="text-red-500 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Art & Drawing Competitions
              </p>
            </div>

            {/* Excursions */}
            <div className="flex items-start gap-4">
              <FaBus className="text-yellow-500 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Academic Excursions & Pakistan Study Tours
              </p>
            </div>

            {/* Volunteer Program */}
            <div className="flex items-start gap-4">
              <FaHandsHelping className="text-teal-600 text-3xl mt-1" />
              <p className="font-medium text-gray-700">
                Community Service & Volunteer Programs
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutActivities;
