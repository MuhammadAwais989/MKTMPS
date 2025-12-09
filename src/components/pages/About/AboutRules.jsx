import React from "react";
import HeaderComponent from "../../sections/HeaderComponent";
import { 
  FaUserTie, FaClipboardList, FaBan, FaExclamationTriangle, FaMobileAlt, FaRunning,
  FaClock, FaBookOpen, FaBroom, FaHandshake, FaTools, FaWalking, FaBookReader,
  FaStar, FaDoorOpen, FaMoneyBillWave, FaSoap 
} from "react-icons/fa";

const AboutRules = () => {
  return (
    <>
      <HeaderComponent title="Rules & Regulations" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-16  pb-20">
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Section Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide flex items-center gap-3">
              <FaClipboardList className="text-blue-600" />
              Rules & Regulations
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>

          {/* Rules List */}
          <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed font-sans">

            {/* Rule A */}
            <div className="flex items-start gap-4">
              <FaUserTie className="text-blue-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">A.</span> Students must wear the complete and proper school uniform before entering the school premises.
              </p>
            </div>

            {/* Rule B */}
            <div className="flex items-start gap-4">
              <FaRunning className="text-green-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">B.</span> Students are required to maintain regular attendance. In case of absence, a written application signed by the parents is mandatory. Low attendance may make the student ineligible for sitting in the annual examination.
              </p>
            </div>

            {/* Rule C */}
            <div className="flex items-start gap-4">
              <FaClipboardList className="text-orange-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">C.</span> Appearing in the preliminary examinations is compulsory for all students.
              </p>
            </div>

            {/* Rule D */}
            <div className="flex items-start gap-4">
              <FaBan className="text-red-500 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">D.</span> Organizing or participating in any school activity without the principal’s permission is strictly prohibited. Smoking, chewing <i>pan</i>, <i>gutka</i>, or using narcotics is forbidden on campus.
              </p>
            </div>

            {/* Rule E */}
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-yellow-500 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">E.</span> Possessing weapons, creating disturbances, or misbehaving with teachers or staff are serious offenses and may lead to expulsion.
              </p>
            </div>

            {/* Rule F */}
            <div className="flex items-start gap-4">
              <FaMobileAlt className="text-purple-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">F.</span> Students are strictly prohibited from bringing mobile phones or electronic devices to school.
              </p>
            </div>

            {/* Rule H */}
            <div className="flex items-start gap-4">
              <FaClock className="text-blue-500 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">H.</span> Students must arrive on time. Latecomers may not be allowed to attend classes without a valid reason.
              </p>
            </div>

            {/* Rule I */}
            <div className="flex items-start gap-4">
              <FaBookOpen className="text-green-500 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">I.</span> All homework and class assignments must be completed regularly. Negligence may affect academic performance.
              </p>
            </div>

            {/* Rule J */}
            <div className="flex items-start gap-4">
              <FaBroom className="text-orange-500 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">J.</span> Students must maintain cleanliness. Littering in classrooms, corridors, or school grounds is discouraged.
              </p>
            </div>

            {/* Rule K */}
            <div className="flex items-start gap-4">
              <FaHandshake className="text-blue-700 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">K.</span> Respect for teachers, staff, and fellow students is mandatory. Bullying or harassment will result in strict action.
              </p>
            </div>

            {/* Rule L */}
            <div className="flex items-start gap-4">
              <FaTools className="text-red-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">L.</span> Students must take care of school property. Damaged items must be compensated by the student.
              </p>
            </div>

            {/* Rule M */}
            <div className="flex items-start gap-4">
              <FaWalking className="text-green-700 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">M.</span> Running or shouting in corridors is not allowed. Discipline should be maintained during breaks.
              </p>
            </div>

            {/* Rule N */}
            <div className="flex items-start gap-4">
              <FaBookReader className="text-purple-700 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">N.</span> Library rules must be followed. Books must be returned on time and silence maintained.
              </p>
            </div>

            {/* Rule O */}
            <div className="flex items-start gap-4">
              <FaStar className="text-yellow-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">O.</span> Students should actively participate in school activities and maintain good behavior.
              </p>
            </div>

            {/* Rule P */}
            <div className="flex items-start gap-4">
              <FaDoorOpen className="text-blue-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">P.</span> Leaving the school premises during school hours is prohibited without administrative permission.
              </p>
            </div>

            {/* Rule Q */}
            <div className="flex items-start gap-4">
              <FaMoneyBillWave className="text-green-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">Q.</span> Students should avoid bringing expensive items or large amounts of money. The school is not responsible for any loss.
              </p>
            </div>

            {/* Rule R */}
            <div className="flex items-start gap-4">
              <FaSoap className="text-teal-600 text-2xl mt-1" />
              <p className="font-medium">
                <span className="font-bold">R.</span> Students must maintain proper personal hygiene and grooming.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default AboutRules;
